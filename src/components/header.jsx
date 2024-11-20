import React, { useEffect, useState } from 'react'
import '../components/header.css'


const Header = () => {

  const [menu, setMenu] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [activedd, setActivedd]=useState(null)


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY) {
        setNavbar(true)
      }
      else {
        setNavbar(false)
      }
    })
  })

  const angleDownFunc=(e,key)=>{
    e.preventDefault()
    setActivedd((prevkey)=>
      prevkey === key ? null : key
    )
  }

  return (
    <>

      <header className={`${navbar ? "sticky-nav" : ""}`}>
        {/* <header className="sticky-nav"> */}

        <nav className='des-nav'>
          <div className='nav-brand'>Navbar</div>

          <div className='nav-links des-view'>
            <ul>
              <li><a href="Home">Home</a></li>
              <li><a href="About">About</a></li>
              <li className='dd'><a href="Products">Products</a>
                <div className='ser-dd'>
                  <ul>
                    <li>
                      <a href="#Service1" >Service 1</a></li>
                    <li><a href="#Service2">Service 2</a></li>
                    <li> <a href="#Service3">Service 3</a></li>
                    <li> <a href="#Service4">Service 4</a></li>
                    <li> <a href="#Service5">Service 5</a></li>
                  </ul>
                  <div className='ser-img'>
                    <img className='active' id="Service1" src="/logo192.png" alt="image" />
                    <img src="/logo512.png" id="Service2" alt="image" />
                    <img src="/logo192.png" id="Service3" alt="image" />

                  </div>
                </div>
              </li>
              <li className='dd'><a href="Service">Service</a>
                <div className='ser-dd'>
                  <ul>
                    <li>
                      <a href="Service 1">Service 1</a></li>
                    <li><a href="Service 2">Service 2</a></li>
                    <li> <a href="Service 3">Service 3</a></li>
                    <li> <a href="Service 4">Service 4</a></li>
                    <li> <a href="Service 5">Service 5</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="Blogs">Blogs</a></li>
              <li><a href="Contact">Contact</a></li>

            </ul>
            <div className='nav-icons'>
              <a href=""><i class="fa-brands fa-facebook"></i></a>
              <a href=""><i class="fa-brands fa-instagram"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>

              <a href=""><i class="fa-solid fa-envelope"></i></a>
            </div>
          </div>

          <div className={`${menu ? "close-icon" : "menu-icon"}`} onClick={() => setMenu(!menu)}>
            <span></span>
            <span></span>
            <span></span>
          </div>


          {/* -----------mbl-nav------------ */}

          <div className={`mbl-nav ${menu ? "show-mbl-nav" : ""} nav-links`}>
            <div className='navlist'>
              <ul className='mbl-ul'>
                <li><a href="Home">Home</a></li>
                <li><a href="About">About</a></li>
                <li className={` ${activedd === "products" ? "angle-down" : ""} mbl-dd`}>
                  <a href="Products"  onClick={(e)=>angleDownFunc(e,"products")}>Products 
                    <i class="fa-solid fa-angle-right"></i>
                   
                  </a>

                  <div className='show-mbl-dd'>
                    <ul>
                      <li>
                        <a href="Service 1">Service 1</a></li>
                      <li><a href="Service 2">Service 2</a></li>
                      <li> <a href="Service 3">Service 3</a></li>
                      <li> <a href="Service 4">Service 4</a></li>
                      <li> <a href="Service 5">Service 5</a></li>
                    </ul>
                    {/* <div className='ser-img'>
                    <img src="/logo192.png" alt="image" />
                  </div> */}
                  </div>
                </li>
                <li className={` ${activedd === "services" ? "angle-down" : ""} mbl-dd`}>
                  <a href="Services"  onClick={(e)=>angleDownFunc(e,"services")}>Services 
                    <i class="fa-solid fa-angle-right"></i>
                   
                  </a>

                  <div className='show-mbl-dd'>
                    <ul>
                      <li>
                        <a href="Service 1">Service 1</a></li>
                      <li><a href="Service 2">Service 2</a></li>
                      <li> <a href="Service 3">Service 3</a></li>
                      <li> <a href="Service 4">Service 4</a></li>
                      <li> <a href="Service 5">Service 5</a></li>
                    </ul>
                  </div>
                </li>
                <li><a href="Blogs">Blogs</a></li>
                <li><a href="Contact">Contact</a></li>

              </ul>
              <div className='nav-icons'>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>

                <a href=""><i class="fa-solid fa-envelope"></i></a>
              </div>
            </div>

          </div>



        </nav>



      </header>


      <section>
        <div className='hero-img'>
          <img src="./images/wallst.jpg" alt="" />
        </div>

        {/* <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore velit, neque corrupti consectetur sequi exercitationem, eligendi at amet dolorem voluptas laboriosam quo illo porro modi maxime atque ut eum! Maxime Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias recusandae ratione nulla quos molestias impedit numquam similique sint itaque perspiciatis quia sit atque sed ex voluptates rerum, vel, porro voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea expedita facere facilis doloremque, adipisci molestiae eaque delectus. Error hic numquam fugiat quasi pariatur perferendis itaque exercitationem alias officiis, maiores aliquid Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt autem consequuntur aspernatur labore accusamus voluptatem atque saepe enim quod ut rerum, mollitia asperiores, ducimus, id dolor a facere odit reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime, temporibus doloribus, ducimus, illo porro maiores vitae libero ea dolores provident! Earum, aliquam. Fugiat numquam assumenda mollitia nihil animi soluta Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus recusandae tempore laboriosam culpa expedita veritatis ex distinctio excepturi placeat nam error quia, quidem quisquam vitae animi, minima cupiditate. Nostrum, rem?</p>
        </div> */}
      </section>

    </>
  )
}

export default Header