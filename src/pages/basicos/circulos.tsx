import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos() {
    return (
        <div className="flex justify-around items-center h-screen bg-black">
            <Circulo texto="Circulo #1" />
            <Circulo texto="Circulo #2" quasePerfeito />
            <Circulo texto="Circulo #3" />
        </div>
    )
}