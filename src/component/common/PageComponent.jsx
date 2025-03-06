

const PageComponent = ({ serverData, searchCondition, movePage }) => {

  const { keyfield, keyword } = searchCondition;

  return (

    <>
      {
        serverData.prev ? <span onClick={() => { movePage({ page: serverData.prevPage, keyfield: keyfield, keyword: keyword }) }} style={{ cursor: 'pointer' }}>이전</span> : <></>
      }

      {
        serverData.pageNumList.map((pageNum, index) => {
          return <span key={index}
            onClick={() => { movePage({ page: pageNum, keyfield, keyword }) }}
            style={{
              margin: '2px',
              color: pageNum === serverData.currentPage ? 'blue' : 'black',
              cursor: 'pointer'
            }}>
            {pageNum}
          </span>
        })
      }

      {
        serverData.next ? <span onClick={() => { movePage({ page: serverData.nextPage, keyfield, keyword }) }} style={{ cursor: 'pointer' }}>다음</span> : <></>
      }

    </>

  );

}


export default PageComponent;