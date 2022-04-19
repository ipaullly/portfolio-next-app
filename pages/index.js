const Page = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 0,
        height: '100%',
        flex: 1
      }}
    >
      <nav
        style={{
          backgroundColor: 'pink',
          flex: 1,
          margin: 0
        }}
      >
        header
      </nav>
      <div>
        body
      </div>
      <footer
        style={{
          backgroundColor: 'pink',
          flex: 1,
          margin: 0
        }}
      >
        footer
      </footer>
    </div>
  )
}

export default Page