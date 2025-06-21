import styles from './page.module.css';

export default function page() {
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.mainHeading}>Terms and Conditions</h1>
                <div className={styles.heading}>Effective Date: 10 December 2024</div>
            </div>
            <p className={styles.paragraph}>
                Welcome to Baliye! We are delighted that you have chosen us for your custom Indian clothing needs. Please read our Terms and Conditions ("Terms") carefully before using our website and services. These Terms govern your access to and use of Baliye's website, services, products, and any other materials, content, or information provided by us.<br />
                By accessing or using our website and services, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please refrain from using our website or services.
            </p>

            <div className={styles.sections}>
                <div className={styles.points}>1. Acceptance of Terms</div>
                <p className={styles.paragraph}>
                    By accessing or using Baliye's services, including but not limited to placing orders, browsing our website, or interacting with our customer service, you accept and agree to these Terms. These Terms are subject to change, and we recommend reviewing them periodically.
                </p>
            </div>

            <div className={styles.sections}>
                <div className={styles.points}>2. Our Services</div>
                <p className={styles.paragraph}>
                    Baliye specializes in custom Indian clothing, offering products that are tailored to your specifications. Our services include fabric selection, design consultation, and customization of traditional Indian clothing (e.g., sarees, lehengas, sherwanis, kurta sets, etc.). We aim to provide a seamless, personalized shopping experience for customers globally.
                </p>
            </div>

            <div className={styles.sections}>
                <div className={styles.points}>3. Eligibility</div>
                <p className={styles.paragraph}>
                    You must be at least 18 years of age to use the services of Baliye or make purchases from our website. By using our services, you represent and warrant that you are at least 18 years old or have obtained the consent of a legal guardian.
                </p>
            </div>

            <div className={styles.sections}>
                <div className={styles.points}>4. Account Registration</div>
                <p className={styles.paragraph}>
                    In order to place orders or access certain features, you may be required to create an account with Baliye. You agree to provide accurate, current, and complete information during the registration process and to update your information as needed.<br />
                    You are responsible for maintaining the confidentiality of your account and password. You agree to notify Baliye immediately of any unauthorized use of your account.
                </p>
            </div>

            <div className={styles.sections}>
                <div className={styles.points}>5. Product Information and Customization</div>
                <p className={styles.paragraph}>
                    Baliye strives to provide accurate descriptions and details for all products listed on our website, including but not limited to fabric type, colors, designs, and measurements. However, please note that:
                </p>
                <ul className={styles.list}>
                    <li>Custom products are made to your specifications, so please ensure all details (such as fabric choice, size, and design) are accurate before submitting your order.</li>
                    <li>Due to the nature of custom-made items, slight variations in color, design, or fabric texture may occur.</li>
                    <li>Baliye is not responsible for any discrepancies between the color of products on the website and the actual product you receive due to monitor settings, lighting, or other factors.</li>
                </ul>
            </div>

            <div className={styles.sections}>
                <div className={styles.points}>6. Orders and Payments</div>
                <p className={styles.paragraph}>
                    When you place an order with Baliye, you agree to purchase the products in accordance with
                    these Terms. All orders are subject to availability and acceptance. We reserve the right to
                    refuse any order at our discretion.
                </p>
                <ul className={styles.list}>
                    <li>Order Confirmation: After you place an order, you will receive an email confirming your order details.</li>
                    <li>Payment: Payments for orders must be made in full at the time of purchase. We accept a variety of payment methods, including major credit/debit cards, PayPal, and other secure payment options.</li>
                    <li>Currency and Taxes: All prices are listed in [Currency] unless otherwise stated. For international orders, additional customs duties or taxes may apply, and it is the responsibility of the customer to cover these costs.</li>
                </ul>
            </div>

            <div className={styles.sections}>
                <div className={styles.points}>7. Changes to Terms</div>
                <p className={styles.paragraph}>
                    Baliye reserves the right to modify or update these Terms at any time without prior notice. Any
                    changes will be posted on this page, and the effective date will be updated accordingly. Your
                    continued use of the website after such modifications constitutes your acceptance of the updated
                    Terms.
                </p>
            </div>
        </div>
    );
}
