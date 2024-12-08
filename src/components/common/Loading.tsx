
interface CSSWithCustomVars extends React.CSSProperties {
    '--i'?: number;
  }
  

const Loading = () => {
    
  return (
    <>
      <div className='pulse-container'>
          <div className="pulse">
          <span style={{ '--i': 0 } as CSSWithCustomVars}></span>
          <span style={{ '--i': 1 }  as CSSWithCustomVars}></span>
          <span style={{ '--i': 2 }  as CSSWithCustomVars}></span>
          <span style={{ '--i': 3 }  as CSSWithCustomVars}></span>
          </div></div>
    </>
  )
}

export default Loading
