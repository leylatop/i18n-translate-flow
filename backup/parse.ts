/**
 * parse csv from string to array
 * @param csvString 
 * @param delimiter 
 * @param quoteChar 
 * @returns 
 */
// export function parseCSV(csvString, delimiter = ',', quoteChar = '"') {
//   const rows = csvString.trim().split('\n');
//   const parsedCSV = [];

//   for (const row of rows) {
//     const rowData = [];
//     let col = '';
//     let inQuote = false;

//     for (let i = 0; i < row.length; i++) {
//       const currentChar = row[i];
//       // 1. 当前字符为双引号
//       if (currentChar === quoteChar) {
//         // 下一个字符也是双引号
//         if (inQuote && i + 1 < row.length && row[i + 1] === quoteChar) {
//           col += currentChar;
//           i++;
//         } else {
//           inQuote = !inQuote;
//         }
//       } else if (currentChar === delimiter && !inQuote) { // 当前字符为逗号
//         rowData.push(col);
//         col = '';
//       } else { // 普通字符
//         col += currentChar;
//       }
//       console.log('---col', col)
//     }

//     rowData.push(col);
//     parsedCSV.push(rowData);
//   }

//   return parsedCSV;
// }
