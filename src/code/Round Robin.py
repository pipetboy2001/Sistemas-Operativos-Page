import queue
import time

# Creamos una cola vacía
q = queue.Queue()

# Creamos una lista con los procesos y su tiempo de ejecución (en segundos)
procesos = [("Proceso A", 3), ("Proceso B", 4), ("Proceso C", 2)]

# Mostramos el tiempo de ejecución de cada proceso
for proceso in procesos:
    print("El proceso", proceso[0], "tiene un tiempo de ejecución de", proceso[1], "segundos.")
    q.put(proceso)

# Definimos el quantum de tiempo en segundos
quantum = 2

# Simulamos la ejecución de los procesos de manera Round Robin
while not q.empty():
    proceso_actual = q.get()
    proceso_nombre = proceso_actual[0]
    proceso_tiempo_restante = proceso_actual[1] - quantum
    if proceso_tiempo_restante > 0:
        q.put((proceso_nombre, proceso_tiempo_restante))
    else:
        proceso_tiempo_restante = 0
    tiempo_ejecucion = min(quantum, proceso_actual[1])
    print("Ejecutando el proceso:", proceso_nombre, "por", tiempo_ejecucion, "segundos")
    time.sleep(1)
    if q.empty() and proceso_tiempo_restante <= 0:
        print("Todos los procesos han sido ejecutados.")
    elif q.empty() and proceso_tiempo_restante > 0:
        q.put((proceso_nombre, proceso_tiempo_restante))

# Mostramos un mensaje indicando que no hay más procesos en la cola
print("No hay más procesos en la cola")


