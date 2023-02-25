import { useNavigate as NavigateRouterDom } from 'react-router-dom'

export const useNavigate = () => {
    const navigate = NavigateRouterDom()

    return (route: string) => {
        navigate(route)
    }
}
