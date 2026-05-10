/* style.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Georgia, serif;
  background: #020817;
  color: #f5ecd7;
  overflow-x: hidden;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

body.loaded {
  opacity: 1;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 28px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.logo img {
  width: 170px;
  height: auto;
}

nav {
  display: flex;
  align-items: center;
}

nav a {
  color: #f5ecd7;
  text-decoration: none;
  margin-left: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  transition: 0.3s;
}

nav a:hover,
nav a.active {
  color: #9bb75d;
}

.inquire-btn {
  border: 1px solid #8fae4d;
  padding: 14px 22px;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #f5ecd7;
  font-size: 2rem;
  cursor: pointer;
}

.hero {
  min-height: 100vh;
  background:
    linear-gradient(rgba(3, 10, 25, 0.35), rgba(3, 10, 25, 0.72)),
    url('images/hero-home.jpg') center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}

.hero-content {
  max-width: 1100px;
  margin-top: 40px;
}

.hero h1 {
  font-size: 6rem;
  line-height: 1.05;
  font-weight: normal;
  margin-bottom: 22px;
}

.hero-divider {
  width: 320px;
  height: 1px;
  background: #8fae4d;
  margin: 24px auto;
  position: relative;
}

.hero-divider::after {
  content: '✦';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  color: #8fae4d;
  font-size: 20px;
}

.hero p {
  font-size: 1.15rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 36px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 16px 34px;
  margin: 8px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 15px;
  color: #f5ecd7;
  border: 1px solid #8fae4d;
  transition: 0.3s;
}

.btn-primary {
  background: rgba(111, 138, 63, 0.82);
}

.btn:hover {
  background: rgba(143, 174, 77, 0.3);
}

.features {
  background: linear-gradient(90deg, rgba(31, 53, 20, 0.96), rgba(14, 27, 15, 0.96));
  padding: 55px 40px;
  border-top: 1px solid rgba(143, 174, 77, 0.35);
}

.grid {
  max-width: 1450px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.card {
  text-align: center;
  padding: 0 20px;
  border-right: 1px solid rgba(143, 174, 77, 0.2);
}

.card:last-child {
  border-right: none;
}

.card h3 {
  color: #b7c97a;
  font-size: 1.5rem;
  margin-bottom: 14px;
}

.card p {
  color: rgba(245, 236, 215, 0.85);
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 1100px) {
  .hero h1 {
    font-size: 4.5rem;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .card:nth-child(2) {
    border-right: none;
  }
}

@media (max-width: 768px) {
  header {
    padding: 20px 30px;
    flex-wrap: wrap;
  }

  .logo img {
    width: 120px;
  }

  .menu-toggle {
    display: block;
  }

  nav {
    display: none;
    width: 100%;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
  }

  nav.active {
    display: flex;
  }

  nav a {
    margin: 12px 0;
  }

  .hero h1 {
    font-size: 3rem;
  }

  .hero-divider {
    width: 180px;
  }

  .hero p {
    font-size: 0.95rem;
    letter-spacing: 2px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .card {
    border-right: none;
    border-bottom: 1px solid rgba(143, 174, 77, 0.2);
    padding-bottom: 25px;
  }

  .card:last-child {
    border-bottom: none;
  }
}
