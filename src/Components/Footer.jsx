import React from 'react'

export const Footer = () => {
    return (
        <footer class="bg-dark text-light py-3">
            <div class="container">
                <p class="text-center">Autor: Pipetboy</p>
                <p class="text-center">Todo contenido protegido</p>
                <div class="d-flex justify-content-center">
                    <a
                        href="https://github.com/pipetboy/sistemas-operativos"
                        target="_blank"
                        class="btn btn-primary mx-3"
                    >
                        Repositorio en GitHub
                    </a>
                    <a
                        href="https://www.usach.cl/"
                        target="_blank"
                        class="btn btn-primary mx-3"
                    >
                        Universidad de Santiago de Chile
                    </a>
                </div>
            </div>
        </footer>
  )
}

export default Footer
