import queue
import time

# Creamos una cola vacía
q = queue.PriorityQueue()

# Creamos una lista con los procesos y su tiempo de ejecución (en segundos)
procesos = [("Proceso A", 3), ("Proceso B", 4), ("Proceso C", 2)]

# Mostramos el tiempo de ejecución de cada proceso
for proceso in procesos:
    print("El proceso", proceso[0], "tiene un tiempo de ejecución de", proceso[1], "segundos.")
    q.put((proceso[1], proceso[0]))

# Simulamos la ejecución de los procesos de manera SJF
while not q.empty():
    proceso_actual = q.get()
    proceso_nombre = proceso_actual[1]
    proceso_tiempo = proceso_actual[0]
    print("Ejecutando el proceso:", proceso_nombre, "por", proceso_tiempo, "segundos")
    time.sleep(proceso_tiempo)
    if q.empty():
        print("Todos los procesos han sido ejecutados.")
    elif not q.empty() and q.queue[0][0] < proceso_tiempo:
        print("El proceso", proceso_nombre, "ha sido interrumpido.")
        q.put((proceso_tiempo - q.queue[0][0], proceso_nombre))
    else:
        print("El proceso", proceso_nombre, "ha sido ejecutado completamente.")

# Mostramos un mensaje indicando que no hay más procesos en la cola
print("No hay más procesos en la cola")
