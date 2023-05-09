import queue
import time

# Creamos una cola vacía
q = queue.PriorityQueue()

# Creamos una lista con los procesos y su tiempo de ejecución (en segundos)
procesos = [("Proceso A", 3), ("Proceso B", 4), ("Proceso C", 2), ("Proceso D", 6)]

# Mostramos el tiempo de ejecución de cada proceso
for proceso in procesos:
    print("El proceso", proceso[0], "tiene un tiempo de ejecución de", proceso[1], "segundos.")
    q.put((proceso[1], proceso[0]))

# Simulamos la ejecución de los procesos de manera SRT
tiempo_transcurrido = 0
while not q.empty():
    proceso_actual = q.get()
    proceso_nombre = proceso_actual[1]
    proceso_tiempo = proceso_actual[0]
    tiempo_transcurrido += proceso_tiempo
    print("Ejecutando el proceso:", proceso_nombre, "por", proceso_tiempo, "segundos")
    time.sleep(proceso_tiempo)
    if q.empty():
        print("Todos los procesos han sido ejecutados.")
    elif not q.empty() and q.queue[0][0] < proceso_tiempo:
        print("El proceso", proceso_nombre, "ha sido interrumpido.")
        tiempo_restante = proceso_tiempo - (q.queue[0][0] - tiempo_transcurrido)
        q.put((tiempo_restante, proceso_nombre))
    else:
        print("El proceso", proceso_nombre, "ha sido ejecutado completamente.")
        # Agregamos un proceso a la cola para que interrumpa
        if proceso_nombre == "Proceso C":
            tiempo_restante = proceso_tiempo - 1
            print("Agregando un proceso a la cola para que interrumpa.")
            print("El proceso E tiene un tiempo de ejecución de 1 segundos")
            q.put((tiempo_restante, "Proceso E"))

# Mostramos un mensaje indicando que no hay más procesos en la cola
print("No hay más procesos en la cola")
