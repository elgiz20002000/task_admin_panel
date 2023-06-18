import {
    DashboardOutlined,
    GiftOutlined,
    MailOutlined,
    PictureOutlined, SettingOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    TeamOutlined,
    UserOutlined,
    MobileOutlined, FileTextOutlined, EditOutlined
} from '@ant-design/icons';
import {APP_PREFIX_PATH} from 'configs/AppConfig'

const dashBoardNavTree = [
    {
        key: 'main',
        path: `${APP_PREFIX_PATH}/main`,
        title: 'Базовый',
        icon: '',
        breadcrumb: false,
        submenu: [
            {
                key: 'home',
                path: `${APP_PREFIX_PATH}/home`,
                title: 'Панель управления',
                icon: DashboardOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'planner',
                path: `${APP_PREFIX_PATH}/planner`,
                title: 'Планировщик',
                icon: EditOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'catalog',
                path: `${APP_PREFIX_PATH}/catalog`,
                title: 'Каталог',
                icon: ShoppingCartOutlined,
                breadcrumb: false,
                submenu: [
                    {
                        key: 'products',
                        path: `${APP_PREFIX_PATH}/catalog/products`,
                        title: 'Товары',
                        breadcrumb: true,
                        submenu: []
                    },
                    {
                        key: 'categories',
                        path: `${APP_PREFIX_PATH}/catalog/categories`,
                        title: 'Категории',
                        breadcrumb: true,
                        submenu: []
                    },
                    {
                        key: 'collections',
                        path: `${APP_PREFIX_PATH}/catalog/collections`,
                        title: 'Коллекции',
                        breadcrumb: true,
                        submenu: []
                    },
                    {
                        key: 'combo',
                        path: `${APP_PREFIX_PATH}/catalog/комбо`,
                        title: 'Комбо',
                        breadcrumb: true,
                        submenu: []
                    },
                ]
            },
            {
                key: 'orders',
                path: `${APP_PREFIX_PATH}/orders`,
                title: 'Заказы',
                icon: ShoppingOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'clients',
                path: `${APP_PREFIX_PATH}/clients`,
                title: 'Клиенты',
                icon: UserOutlined,
                breadcrumb: false,
                submenu: [
                    {
                        key: 'clients_list',
                        path: `${APP_PREFIX_PATH}/clients/clients_list`,
                        title: 'Cписок клиентов',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                    {
                        key: 'clients_group',
                        path: `${APP_PREFIX_PATH}/clients/clients_group`,
                        title: 'Группа клиентов',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                ]
            },
            {
                key: 'banners',
                path: `${APP_PREFIX_PATH}/banners`,
                title: 'Баннеры',
                icon: PictureOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'promocodes',
                path: `${APP_PREFIX_PATH}/promocodes`,
                title: 'Промокоды',
                icon: GiftOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'offline_dots',
                path: `${APP_PREFIX_PATH}/offline_dots`,
                title: 'Оффлайн точки',
                icon: ShopOutlined,
                breadcrumb: false,
                submenu: [
                    {
                        key: 'adresses',
                        path: `${APP_PREFIX_PATH}/offline_dots/adresses`,
                        title: 'Адреса',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                    {
                        key: 'geozones',
                        path: `${APP_PREFIX_PATH}/offline_dots/geozones`,
                        title: 'Геозоны',
                        icon: '',
                        breadcrumb: false,
                        submenu: []
                    },
                ]
            },
            {
                key: 'employees',
                path: `${APP_PREFIX_PATH}/employees`,
                title: 'Сотрудники',
                icon: TeamOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'mailings',
                path: `${APP_PREFIX_PATH}/mailings`,
                title: 'Рассылки',
                icon: MailOutlined,
                breadcrumb: false,
                submenu: []
            },
        ]
    },

    {
        key: 'systemics',
        path: `${APP_PREFIX_PATH}/systemics`,
        title: 'Системность',
        icon: '',
        breadcrumb: true,
        submenu: [
            {
                key: 'settings',
                path: `${APP_PREFIX_PATH}/settings`,
                title: 'Настройки',
                icon: SettingOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'mobile_app',
                path: `${APP_PREFIX_PATH}/mobile_app`,
                title: 'Мобильное приложение',
                icon: MobileOutlined,
                breadcrumb: false,
                submenu: []
            },
            {
                key: 'logs',
                path: `${APP_PREFIX_PATH}/logs`,
                title: 'Логи',
                icon: FileTextOutlined,
                breadcrumb: false,
                submenu: []
            },
        ]
    },
]


const navigationConfig = [
    ...dashBoardNavTree,
]

export default navigationConfig;
