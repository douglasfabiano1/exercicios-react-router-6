import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";


export default function Subscription() {

    return (
        <main>
            <section>
                <div className="container">
                    <h2 className="section-title">Faça sua Inscrição</h2>
                    <div className="mt30 mb30">
                        <Card title="Página de Inscrição" />
                    </div>
                    <div className="dflex">
                        <Link to="promotion">
                            <Button text="Ver promoção" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
