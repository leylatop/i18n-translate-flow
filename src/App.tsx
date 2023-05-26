import CSVUpload from './container/CSVUpload'
import './App.css'

function App() {
  return (
    <div>
      <h1>csv 在线编辑器</h1>
      <div style={{ textAlign: 'left' }}>
        1. 支持预览上传的csv文件<br />
        2. 支持修改csv文件<br />
        3. 支持将下载修改后的csv文件（保存原csv格式，包括是否引号 ""）
      </div>
      <div>
        csv 列自动解析规则
        1. 列以,为列的分割点
        1. 若列中包含"", 则双引号需要""""写
        </div>
      <br />
      <br />
      <CSVUpload />
    </div>
  )
}

export default App
