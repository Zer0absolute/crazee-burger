export default function EmptyMenuAdmin({ onReset }) {
    return (
        <div>
            <h1>Le menu est vide ?</h1>
            <h1>Cliquez ci-dessous pour le réinitialiser</h1>
            <button onClick={onReset}>Générer de nouveaux produits</button>
        </div>
    )
}
