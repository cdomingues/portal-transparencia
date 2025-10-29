import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'


export const initGA = ()=> {
    ReactGA.initialize('G-7XQWR7YJLF')
}

export const logPageView = (path: string) =>{
    ReactGA.send({hitType: "pageview", page: path})
}

