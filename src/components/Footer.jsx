export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mx-auto py-2 px-4 text-center">
      <footer>Copyright <i className="ri-copyright-line"></i> { year }, by Novianto Eko Budiman, All Rights Reserved</footer> 
    </div>
  )
}