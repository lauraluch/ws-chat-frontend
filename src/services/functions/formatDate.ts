export function formatDateTime(isoStringDate?: string) {
  if (!isoStringDate) return "";
  const date = new Date(isoStringDate);
  return (
    date.toLocaleDateString("pt-BR") + " às " + date.toLocaleTimeString("pt-BR")
  );
}
