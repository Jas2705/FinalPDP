import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"

const CadsWinners2 = ({ cartawinner2 }) => {
  const { image, suit } = cartawinner2
  return (
    <Card sx={{ maxWidth: 151 }}>
      <CardMedia
        component="img"
        height="205"
        sx={{ width: 151 }}
        image={image}
        alt={`imagen ${suit}`}
      />
    </Card>
  )
}

export default CadsWinners2