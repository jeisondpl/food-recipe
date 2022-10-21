
export interface IRoute {
    to: string
    title: string
    Component: () => JSX.Element;
}
