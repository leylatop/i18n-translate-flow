import { useRef, useState } from 'react'
import styled from 'styled-components'
// import { connect } from 'react-redux'
import { parsedCSVToArray } from '../../utils/parse'

// interface HTMLInputEvent extends Event {
//   target: HTMLInputElement & EventTarget
// }
const CSVUpload = () => {
  const [fileData, setFileData] = useState([[]] as string[][])
  const ref = useRef(null)
  const handleOnChange = (event: any) => {
    const target = (event?.target as HTMLInputElement)
    const file = target.files && target.files[0]
    handleShowCSV(file)
    console.log('=========lalalal')
    console.log('=========lalalal')
    console.log('=========lalalal')
  }

  const handleShowCSV = (file: any) => {
    const reader = new FileReader()
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if(event.target) {
        const csvString = event.target.result
        const parsedCSVArray = parsedCSVToArray(csvString as string)
        console.log('====parsedCSVArray', parsedCSVArray)
        setFileData(parsedCSVArray)
      }
    }
    reader.readAsText(file)
  }

  return (
    <StyledCsvUpload>
      <div title='上传将待翻译的csv文件'>上传csv 文件</div>
      <input type="file" id="file" onChange={handleOnChange}/>
      <div className='csv' ref={ref}></div>
      <div className='csv-container'>
        <table>
          <tbody>
            {fileData.map(data => <tr>{data.map(d => <td>{d}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
    </StyledCsvUpload>
  )
}


export default CSVUpload

const StyledCsvUpload = styled.div`
  
`
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(CSVUpload)