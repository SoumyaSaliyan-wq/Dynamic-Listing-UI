import Card from "../components/Card";
import Figure from "../components/Figure";

function Home() {
  return (
    <>
      <Figure quote="Believe you can and you're halfway there." quoteCredit="Theodore Roosevelt"></Figure>
      <Card image="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s" text="The future belongs to those who believe in the beauty of their
              dreams." title="Ocean Breeze"></Card>
     <Card image="https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o" text="The best way to predict the future is to create it
              " title="Calm View"></Card>
    </>
  );
}
export default Home;
