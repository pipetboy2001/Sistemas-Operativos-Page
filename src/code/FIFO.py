import queue
import time
# Creamos una cola vacía
q = queue.Queue()

# Creamos una lista con los procesos
procesos = ["Proceso A", "Proceso B", "Proceso C"]
# Mostramos los procesos en cola
for proceso in procesos:
    print("El proceso", proceso, "está en cola.")
    

# Agregamos los procesos a la cola
for proceso in procesos:
    q.put(proceso)

# Simulamos la ejecución de los procesos de manera FIFO
while not q.empty():
    proceso_actual = q.get()
    print("Ejecutando el proceso:", proceso_actual)
    time.sleep(1)

# Mostramos un mensaje indicando que no hay más procesos en la cola
print("No hay más procesos en la cola")
