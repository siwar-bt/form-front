import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardStart() {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Start building your own form</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
}

export default CardStart;