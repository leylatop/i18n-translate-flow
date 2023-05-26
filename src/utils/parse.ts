/**
 * parse csv to array data
 * @param csvString 
 * @returns 
 */
export function parsedCSVToArray(csvString: string) {
  const rows = csvString.trim().split('\n')
  const result: string[][] = []

  rows.forEach(row => {
    const columns = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
    result.push(columns)
  })

  return result
}