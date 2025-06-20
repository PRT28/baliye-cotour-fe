/* eslint-disable @next/next/no-img-element */
import style from './ProductCard.module.css';

export default function ProductCard({title, priceMin, priceMax, imgUrl, isPick}) {
    return (
        <div className={style.productCard}>
            <img src={imgUrl} alt="product" className={style.productImg} />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className={style.productTitle}>{title}</div>
                {isPick && <div className={style.editorPick}>Editor&apos;s Pick</div>}
            </div>
            <div>${priceMin} - ${priceMax}</div>

        </div>
    );
}