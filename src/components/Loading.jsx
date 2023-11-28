import { Box } from "@mui/material"

const Loading = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <div className="loading">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </Box>
  )
}

export default Loading
