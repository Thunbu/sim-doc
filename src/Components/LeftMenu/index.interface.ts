export interface LeftMenuProps{
    el: string
}
export interface MenuProps {
    el: HTMLElement | null
}
export interface LeftMenuJSON {
    name: string,
    icon?: string,
    MDFile: string,
    id: string,
    children?: LeftMenuJSON[]
}
