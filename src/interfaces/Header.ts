export default interface IHeader {
    title: string,
    description: string,
    className?: string,
    image?: string,
    children?: JSX.Element | string
}