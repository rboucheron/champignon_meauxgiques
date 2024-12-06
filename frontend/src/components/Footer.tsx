import MentionLegal from './mentionlegal'

const Footer = () => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'center', position: 'inherit',  bottom: '-890rem'}}>
            <div className="container">
                <MentionLegal />
            </div>
        </footer>
    )
}

export default Footer;