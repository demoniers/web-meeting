.navbar {
  background-color: black;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #00ff99;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ff99;
}

.links {
  display: flex;
  gap: 1rem;
}

.link {
  color: #00ff99;
  text-decoration: none;
  transition: color 0.3s;
}

.link:hover {
  color: white;
}

/* Responsivo */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    text-align: center;
  }
  .links {
    flex-direction: column;
  }
}
