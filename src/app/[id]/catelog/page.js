
import styles from './page.module.css'
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Page({}) {
    return (
        <div className={styles.pageContainer}>
            <div style={{width: '85%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    <div className={styles.title}>Kurta predesigned for you</div>
                    <div className={styles.sub}>Home <img src="/caret-right.svg" /> <span>Kurti</span></div>
                </div>
                <div>Sort By</div>
            </div>
            <div className={styles.productWrapper}>
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product1.png" isPick />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product2.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product3.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product1.png" isPick />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product2.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product3.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product1.png" isPick />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product2.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product3.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product1.png" isPick />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product2.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product3.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product1.png" isPick />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product2.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product3.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product1.png" isPick />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product2.png" />
                <ProductCard title="Banarasi Suit" priceMax={200} priceMin={150} imgUrl="/png/product3.png" />
            </div>
        </div>
    );
}