export default function Home() {
  return (
    <main className="flex mt-28 justify-around">
      <div className="advertising-left ">
        <ul>
          <li>Shopping</li>
          <li>Productos Mexicanos</li>
          <li>Consume Local</li>
        </ul>
      </div>
      <div>
        <h3>Próximos Bazares</h3>
        <button>Jalisco</button>
        <ul>
          <li>Morena Bazar - 10 jun</li>
          <li>Mil Cosas Bazar - 17 jun</li>
          <li>Bazar Manos Mexicanas - 24 jun</li>
        </ul>
      </div>
    </main>
  );
}
