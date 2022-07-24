import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"

const Cartaj1 = ({cartaj1}) => {
  const { image, suit} = cartaj1
  return (
    <Card sx={{ maxWidth: 151}}>
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

export default Cartaj1