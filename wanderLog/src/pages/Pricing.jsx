// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
    return (
        <main
            className={styles.product}
            style={{
                "background-image":
                    'linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url("/img-2.jpg")',
            }}
        >
            <PageNav />

            <section>
                <div>
                    <h2>
                        Simple pricing.
                        <br />
                        Just $9/month.
                    </h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore
                        mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.
                    </p>
                </div>
                <img
                    src='img-2.jpg'
                    alt='overview of a large city with skyscrapers'
                />
            </section>
        </main>
    );
}
