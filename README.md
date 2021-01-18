La estructura es:

- wrapper
  - search-container
    - search-box
      - search-results (div)
        - ul
          - li
      - input
      - button
        - i

El **Searchbox** se acomoda en el centro del **SearchContainer**. Posteriormente cuando se abre y se muestra el **input**, el **Searchbox** se acomoda en el centro del **Wrapper**.

El **Searchbox** inicialmente está cerrado, o sea el **input** no se muestra. Se le hace click al **button** y así se abre el **input**. Con el **input** abierto si le damos click al **button** se ejecuta busqueda. Una vez que se ingresa algo dentro del **input** se muestra el **SearchResults** que son los resultados de la busqueda.

Cabe mencionar que no hay datos reales conectados. Los resultados de la busqueda están escritos en el código.

Lo unico que tiene que hacer el usuario para que funcione el JavaScript es asignarle la clase **search-box** a un elemento. Y dentro tiene que haber un div, un input y un button. En el orden como muestra la estructura.

La clase **Wrapper** es personalizada. En este ejemplo trabaja como un Header.

Y todo es personalizable, los tamaños, los movimientos, todo. Quizas no hace falta usar un wrapper y no hace falta que el Searchbox se mueva al centro de la pantalla. Quizas queremos un tamaño del Searchbox personalizable. Todo se puede cambiar.

Hay variables globales tanto en CSS como en JavaScript, son muy similares.

A futuro, me gustaría sacarle el CSS y dejar solo JavaScript para poder usar las mismas variables globales, pero por ahora está funcional a lo que necesito.
