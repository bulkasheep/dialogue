import { Link } from "react-router";
import Logo from "../../../../assets/icons/Logo.svg";
import Social from "../../../../components/Social";
import Dropdown from "../../../../components/Dropdown";
import typography from "../../../../typography.module.css";
import styles from "./styles.module.css";

const classNames = {
    navigation: [typography.button2, styles.navigation].join(" "),
    description: [typography.description, styles.description].join(" "),
}
const columns = [
    {
        title: "Диалог поколений",
        buttons: [
            { text: "О Диалоге поколений" },
            { text: "Диалоги" },
            { text: "Мнения" },
            { text: "Статьи" },
            { text: "Подкасты" }
        ]
    },
    {
        title: "Библиотека знаний",
        buttons: [
            { text: "О Библиотеке знаний" },
            { text: "Курсы" },
            { text: "Условия сотрудничества" },
            { text: "Гайд для авторов" },
            { text: "Гайд для пользователей" }
        ]
    }
];

const footer = [
    { text: "Политика обработки персональных данных" },
    { text: "Согласие на обработку персональных данных" },
    { text: "Пользовательское соглашение" },
    { text: "Согласие на использование cookies-файлов" }
];

function Footer() {
    return <footer className={styles.footer}>
        <section className={styles.top}>
            <Link>
                <img src={Logo}
                    alt="Логотип SelfSchool" />
            </Link>
            {columns.map((column, index) =>
                <nav key={index} className={styles.column}>
                    <h4 className={typography.h4}>{column.title}</h4>
                    <ul className={classNames.navigation}>
                        {column.buttons.map((button, index) =>
                            <li key={index}>
                                <Link>{button.text}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            )}
            <nav className={styles.column}>
                <h4 className={typography.h4}>О нас</h4>
                <article className={classNames.description}>
                    <p>Selfschool — это проект, созданный вместе с вами и для вас. Здесь мы обсуждаем вопросы, с которыми каждый из нас сталкивается ежедневно. Высказываем мнения: экспертные, родительские и детские.</p>
                    <p>Компания осуществляет деятельность в сфере информационных технологий и имеет аккредитацию Минцифры.</p>
                </article>
                <ul className={classNames.navigation}>
                    <li>
                        <Link>Свидетельство о регистрации ПО</Link>
                    </li>
                    <li>
                        <Dropdown title="Товарный знак">
                            <ul>
                                <li>
                                    <Link>Товарный знак №1066324</Link>
                                </li>
                                <li>
                                    <Link>Товарный знак №949843</Link>
                                </li>
                                <li>
                                    <Link>Товарный знак №945576</Link>
                                </li>
                            </ul>
                        </Dropdown>
                    </li>
                </ul>
            </nav>
            <nav className={styles.contactsContainer}>
                <ul className={styles.contacts}>
                    <li>
                        <Link>Контакты</Link>
                    </li>
                    <li>
                        <Link>Сотрудничество</Link>
                    </li>
                </ul>
                <ul className={styles.socials}>
                    <li>
                        <Link>
                            <Social type="vk" />
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <Social type="instagram" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
        <section className={styles.bottom}>
            <ul className={styles.section}>
                {footer.map((link, index) =>
                    <li key={index}>
                        <Link>{link.text}</Link>
                    </li>
                )}
            </ul>
            <ul className={styles.section}>
                <li>
                    <Link to="mailto:info@selfschool.ru">info@selfschool.ru</Link>
                </li>
                <li>© ООО «Парта», 2021-2024</li>
            </ul>
        </section>
    </footer>
}

export default Footer;