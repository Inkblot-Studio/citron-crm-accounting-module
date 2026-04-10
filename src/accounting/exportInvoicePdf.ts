import { jsPDF } from 'jspdf'
import type { InvoiceDraft } from './invoiceDraft'
import { computeLineTotal, computeTax, computeTotal, draftSubtotal, formatUsd } from './invoiceDraft'

const M = 48
const PAGE_W = 595.28
const PAGE_H = 841.89
const CONTENT_W = PAGE_W - M * 2

function addWrappedText(
  pdf: jsPDF,
  lines: string[],
  x: number,
  y: number,
  lineHeight: number,
  maxY: number,
): number {
  let cy = y
  for (const line of lines) {
    if (cy + lineHeight > maxY) {
      pdf.addPage()
      cy = M
    }
    pdf.text(line, x, cy)
    cy += lineHeight
  }
  return cy
}

function drawLineTableHeader(pdf: jsPDF, y: number, colDesc: number, colQty: number, colUnit: number, colAmt: number): number {
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(8)
  pdf.setTextColor(100, 100, 100)
  pdf.text('DESCRIPTION', colDesc, y)
  pdf.text('QTY', colQty, y)
  pdf.text('UNIT', colUnit, y)
  pdf.text('AMOUNT', colAmt, y, { align: 'right' })
  y += 6
  pdf.setDrawColor(230, 230, 230)
  pdf.line(M, y, PAGE_W - M, y)
  return y + 16
}

/**
 * A4 invoice as vector PDF (text and lines), not a raster image.
 */
export function exportInvoiceDraftToPdf(draft: InvoiceDraft, fileBaseName: string): void {
  const pdf = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' })
  const subtotal = draftSubtotal(draft)
  const tax = computeTax(subtotal, draft.taxRatePct)
  const total = computeTotal(subtotal, tax)

  pdf.setFillColor(245, 245, 245)
  pdf.rect(0, 0, PAGE_W, 72, 'F')
  pdf.setDrawColor(220, 220, 220)
  pdf.line(0, 72, PAGE_W, 72)

  pdf.setTextColor(30, 30, 30)
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(11)
  pdf.text('Citron Accounting', M, 32)

  pdf.setFontSize(24)
  pdf.text('INVOICE', PAGE_W - M, 38, { align: 'right' })

  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(10)
  pdf.text(draft.invoiceNumber, PAGE_W - M, 56, { align: 'right' })

  const metaX = PAGE_W - M - 152
  const metaRight = PAGE_W - M
  const metaRows: [string, string][] = [
    ['Issue date', draft.issueDate ?? '—'],
    ['Due date', draft.dueDate ?? '—'],
    ['Terms', draft.dueTerms],
    ['Type', draft.invoiceTypeLabel],
    ['Payment', draft.paymentMethodLabel],
  ]

  let y = 96
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(8)
  pdf.setTextColor(100, 100, 100)
  pdf.text('BILL TO', M, y)
  y += 14
  pdf.setTextColor(30, 30, 30)
  pdf.setFontSize(11)
  pdf.text(draft.clientName, M, y)
  y += 16
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9)
  pdf.text(draft.clientEmail, M, y)
  const leftBottom = y + 8

  let my = 96
  pdf.setFontSize(8)
  for (const [label, val] of metaRows) {
    pdf.setFont('helvetica', 'bold')
    pdf.setTextColor(100, 100, 100)
    pdf.text(label, metaX, my)
    pdf.setFont('helvetica', 'normal')
    pdf.setTextColor(30, 30, 30)
    const line = val.length > 42 ? `${val.slice(0, 39)}…` : val
    pdf.text(line, metaRight, my, { align: 'right' })
    my += 14
  }

  y = Math.max(leftBottom, my) + 20

  pdf.setDrawColor(200, 200, 200)
  pdf.setLineWidth(0.75)
  pdf.line(M, y, PAGE_W - M, y)
  y += 18

  const colDesc = M
  const colQty = PAGE_W - M - 200
  const colUnit = PAGE_W - M - 130
  const colAmt = PAGE_W - M

  y = drawLineTableHeader(pdf, y, colDesc, colQty, colUnit, colAmt)

  pdf.setTextColor(30, 30, 30)
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(10)

  const tableBottomLimit = PAGE_H - M - 200

  for (const li of draft.lineItems) {
    const lineAmt = computeLineTotal(li.quantity, li.unitPrice)
    const descLines = pdf.splitTextToSize(li.productLabel || '—', colQty - colDesc - 12)
    const descH = Math.max(descLines.length * 13, 14)
    if (y + descH > tableBottomLimit) {
      pdf.addPage()
      y = M + 12
      y = drawLineTableHeader(pdf, y, colDesc, colQty, colUnit, colAmt)
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(10)
      pdf.setTextColor(30, 30, 30)
    }
    const rowTop = y
    pdf.text(descLines, colDesc, y)
    pdf.text(String(li.quantity), colQty, rowTop)
    pdf.text(formatUsd(li.unitPrice), colUnit, rowTop)
    pdf.setFont('helvetica', 'bold')
    pdf.text(formatUsd(lineAmt), colAmt, rowTop, { align: 'right' })
    pdf.setFont('helvetica', 'normal')
    y = rowTop + descH + 12
  }

  pdf.line(M, y, PAGE_W - M, y)
  y += 20

  const sumX = PAGE_W - M
  const labelX = sumX - 118
  pdf.setFontSize(10)
  pdf.text('Subtotal', labelX, y, { align: 'right' })
  pdf.text(formatUsd(subtotal), sumX, y, { align: 'right' })
  y += 16
  pdf.text(`Tax (${draft.taxTypeLabel})`, labelX, y, { align: 'right' })
  pdf.text(formatUsd(tax), sumX, y, { align: 'right' })
  y += 22
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(12)
  pdf.text('Total due', labelX, y, { align: 'right' })
  pdf.text(formatUsd(total), sumX, y, { align: 'right' })
  pdf.setFont('helvetica', 'normal')
  y += 32

  pdf.setFontSize(9)
  pdf.setFont('helvetica', 'bold')
  pdf.setTextColor(100, 100, 100)
  pdf.text('BANK / PAYMENT INSTRUCTIONS', M, y)
  y += 14
  pdf.setTextColor(30, 30, 30)
  pdf.setFont('helvetica', 'normal')
  const bankLines = pdf.splitTextToSize(draft.bankAccountLabel, CONTENT_W)
  y = addWrappedText(pdf, bankLines, M, y, 13, PAGE_H - M - 48)

  if (draft.notes.trim()) {
    y += 16
    pdf.setFont('helvetica', 'bold')
    pdf.setTextColor(100, 100, 100)
    pdf.text('NOTES', M, y)
    y += 14
    pdf.setFont('helvetica', 'normal')
    pdf.setTextColor(30, 30, 30)
    const noteLines = pdf.splitTextToSize(draft.notes.trim(), CONTENT_W)
    y = addWrappedText(pdf, noteLines, M, y, 13, PAGE_H - M - 48)
  }

  pdf.setFontSize(8)
  pdf.setTextColor(150, 150, 150)
  pdf.text('Citron Accounting · Thank you for your business.', M, PAGE_H - M)

  const name = fileBaseName.endsWith('.pdf') ? fileBaseName : `${fileBaseName}.pdf`
  pdf.save(name)
}
