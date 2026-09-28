# Estimación con COCOMO básico

Calculadora web que estima el esfuerzo, el tiempo de desarrollo y el personal promedio de un proyecto a partir de su tamaño en KLOC y su modo de desarrollo.

## Estimación de Hawk

Hawk es la plataforma GRC que se está desarrollando en el reto del bloque con FEMSA. Para el MVP se consideran 12 KLOC en modo orgánico, ya que el equipo es pequeño y el problema es conocido.

| Dato | Valor |
|---|---|
| Tamaño | 12 KLOC |
| Modo | Orgánico (a = 2.4, b = 1.05, c = 2.5, d = 0.38) |
| Esfuerzo E = 2.4 × 12^1.05 | 32.61 persona-mes |
| Tiempo D = 2.5 × 32.61^0.38 | 9.40 meses |
| Personal P = E / D | 3.47 personas |

El modelo indica cerca de 9 meses y medio con 3 o 4 personas, lo cual supera el tiempo que queda del semestre, por lo que el alcance del MVP tendría que ajustarse.

## Comprobación con los ejercicios de clase

| Caso | Datos | Resultado de referencia | Resultado de la app |
|---|---|---|---|
| Ejemplo de la presentación | 30 KLOC, orgánico | E ≈ 85.4, D ≈ 13.6, P ≈ 6 | E = 85.35, D = 13.55, P = 6.30 |
| Ejercicio 1 | 50 KLOC, semi-acoplado | E ≈ 239.9, D ≈ 17.0, P ≈ 14.1 (cálculo manual) | E = 239.87, D = 17.02, P = 14.09 |

Los resultados coinciden con la presentación y con el cálculo manual. La única diferencia es el redondeo del tiempo en el ejemplo (13.55 contra 13.6 meses).
