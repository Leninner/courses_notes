#

# swapcase()

-   Cambia las mayúsculas por minúsculas y viceversa

TODO EN RUBY ES UN OBJETO

REVIEW: EN RUBY NO SE PUEDE USAR:

-   i++
-   i--
-   etc...

REVIEW: Para conocer el tipo de archivo que tenemos podemos hacer los siguiente:

    42.class # Fixnum
    42.0.class # Float
    "42".class # String
    String.class # Class
    Fixnum.class # Class

# Maneras de imprimir en pantalla

P Muestra una versión más cruda de lo que se quiere imprimir.
PUTS Retorna nil y P retorna el objeto que se le pasa
La diferencia entre PUTS y PRINT es que PUTS añade una nueva línea al final de cada impresión, y PRINT no añade ninguna.
Ejemplo:
puts [1,2]
1
2
print [1,2]
[1,2]

-   pp => Imprime hashes y arrays de una mejor manera
-   p "Hola Mundo"
    "Hola Mundo"
    => "Hola Mundo"
-   puts "HOLA MUNDO"
    HOLA MUNDO
    => nil
-   print "HOLA MUNDO"
    HOLA MUNDO => nil
-   putc "HOLA MUNDO"
    H => "Hola Mundo"

# ARRAYS

Para declarar un arreglo solamente lo hacemos de la siguiente manera:

-   array = ["12", "13", "14"]

O podemos llamar al método "Array.new" a quién le podemos pasar 2 parámetro con la cantidad de elementos y valor por defecto.

-   Array.new() # => []
-   Array.new(3) # => [nil, nil, nil]
-   Array.new(3, 7) #=> [7, 7, 7]
-   Array.new(3, true) #=> [true, true, true]

REVIEW: Para acceder a elementos de un arreglo, lo hacemos con el número de su índice, recordando que se cuenta desde el elemento 0. Para llamar al último elemento de un arreglo podemos utilizar el índice -1, etc...

Se puede obtener X elementos con los siguientes métodos:

-   array = ["12", "13", "14", "15", "16", "17"]
    array.first # => 12
    array.first(2) # => 12, 13
    array.last # => 17
    array.last(2) # => 16, 17

Para añadir elementos se puede utilizar el método .push o << para añadir elementos al final del arreglo.
Para eliminar elementos podemos utilizar el método .pop o .pop(X) que elmina el último o los últimos elementos del arreglo.
Para añadir elementos al inicio del arreglo utilizamos .unshift y para eliminar el primer elemento utilizar .shift o .shift(X).

Para concatenar arreglos podemos hacer lo siguiente:

-   a = [1, 2, 3]
    b = [3, 4, 5]

-   a + b #=> [1, 2, 3, 3, 4, 5]
    a.concat(b) #=> [1, 2, 3, 3, 4, 5]

Para obtener la diferencia entre 2 arreglos podemos utilizar lo siguiente:

-   [1, 1, 1, 2, 2, 3, 4] - [1, 4] #=> [2, 2, 3]

REVIEW: Si llamamos al método #.methods de un arreglo, podemos ver diferentes métodos aplicados al mismo arreglo, cómo:

-   num_array.methods

-   [].empty? #=> true
    [[]].empty? #=> false
    [1, 2].empty? #=> false

-   [1, 2, 3].length #=> 3

-   [1, 2, 3].reverse #=> [3, 2, 1]

-   [1, 2, 3].include?(3) #=> true
    [1, 2, 3].include?("3") #=> false

-   [1, 2, 3].join #=> "123"
    [1, 2, 3].join("-") #=> "1-2-3"

Para obtener el resultado con una específica condición podemos utilizar .map o .collect:

-   irb :001 > a = [1, 2, 3, 4]
    => [1, 2, 3, 4]
    irb :002 > a.map { |num| num**2 }
    => [1, 4, 9, 16]
    irb :003 > a.collect { |num| num**2 }
    => [1, 4, 9, 16]
    irb :004 > a
    => [1, 2, 3, 4]

Para eliminar algún elemtno de una arreglo podemos utilizar delete_at con su índice:

-   a.delete_at(1) # => [1,3,4]

Para elminar un elemento que no sabemos su índice, utilizamos delete:

-   irb :007 > my_pets = ["cat", "dog", "bird", "cat", "snake"]
    => ["cat", "dog", "bird", "cat", "snake"]
    irb :008 > my_pets.delete("cat")
    => "cat"
    irb :009 > my_pets
    => ["dog", "bird", "snake"]

Para eliminar elementos repetidos en un arreglo podemos utilizar .uniq:

-   irb :010 > b = [1, 1, 2, 2, 3, 3, 4, 4]
    => [1, 1, 2, 2, 3, 3, 4, 4]
    irb :011 > b.uniq
    => [1, 2, 3, 4]
    irb :012 > b
    => [1, 1, 2, 2, 3, 3, 4, 4]

    -   Uniq por si solo no es un método que destruye al arreglo, pero si agregamos el signo (!) podemos hacer que funcione de forma similar a delete.

-   irb :010 > b = [1, 1, 2, 2, 3, 3, 4, 4]
    => [1, 1, 2, 2, 3, 3, 4, 4]
    irb :011 > b.uniq
    => [1, 2, 3, 4]
    irb :012 > b
    => [1, 2, 3, 4]

Podemos utilizar el método .select para que nos devuelva los elementos que al pasarles una condición dan verdadero:

-   No es un método destructivo.
-   irb :001 > numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    irb :002 > numbers.select { |number| number > 4 }
    => [5, 6, 7, 8, 9, 10]
    irb :003 > numbers
    => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Se puede crear arreglos dentro de otros arreglos y acceder a ellos con su índice:

-   irb :001 > teams = [['Joe', 'Steve'], ['Frank', 'Molly'], ['Dan', 'Sara']]
    => [["Joe", "Steve"], ["Frank", "Molly"], ["Dan", "Sara"]]
    irb :002 > teams[1]
    => ["Frank", "Molly"]

to_s sirve para pasar un arreglo a un string. Ruby hace esto sin que veamos cuando utilizamos interpolación de string:

-   irb :001 > a = [1, 2, 3]
    => [1, 2, 3]
    irb :002 > "It's as easy as #{a}"
    => "It's as easy as [1, 2, 3]"

Para comprobar que un elemento está incluido en el arreglo utilizamos .include?(X).
Para unir una matriz anidada de arreglos y hacerlo un arreglo unidimensional, podemos utilizar .flatten:

-   irb: 001 > a = [1, 2, [3, 4, 5], [6, 7]]
    => [1, 2, [3, 4, 5], [6, 7]]
    irb: 002 > a.flatten
    => [1, 2, 3, 4, 5, 6, 7]

Para obtener el índice de cada elemento podemos hacer uso de each_index:

-   irb: 001 > a = [1, 2, 3, 4, 5]
    => [1, 2, 3, 4, 5]
    irb: 002 > a.each_index { |i| puts "This is index #{i}" }
    This is index 0
    This is index 1
    This is index 2
    This is index 3
    This is index 4
    => [1, 2, 3, 4, 5]

Para obtener el índice de cada elemento con el elemento en sí, utilizamos each_with_index:

-   irb: 001 > a = [1, 2, 3, 4, 5]
    => [1, 2, 3, 4, 5]
    irb: 002 > a.each_with_index { |val, idx| puts "#{idx+1}. #{val}" }

    -   Primero le pasamos el valor y luego el índice dentro las líneas verticales: |val, idx|

-   1. 1
-   2. 2
-   3. 3
-   4. 4
-   5. 5
       => [1, 2, 3, 4, 5]

Para ordenar un arreglo utilizamos sort, que es un método destructivo:

-   irb :001 > a = [5, 3, 8, 2, 4, 1]
    => [5, 3, 8, 2, 4, 1]
    irb :002 > a.sort
    => [1, 2, 3, 4, 5, 8]

Para combinar o multiplicar arreglos podemos utilizar .product:

-   irb :001 > [1, 2, 3].product([4, 5])
    => [[1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]]

REVIEW: La diferencia entre .map y .each es que .map devuelve un nuevo arreglo con los parámetros de .map.
Es mejor utilizar .map para transformaciones y .each para iteraciones:

-   irb :009 > a = [1, 2, 3]
    irb :010 > a.map { |x| puts x\*\*2 }
    => [nil, nil, nil]

-   irb :003 > a = [1, 2, 3]
    irb :004 > a.each { |e| puts e + 2 }
    3
    4
    5
    => [1, 2, 3]

REVIEW: Puedes evitar tener que escribir comillas en cada string usando %w:

-   names = %w(hola, lenin, mathias) => Podemos utilizar comas para separar o en su lugar, nada.

Si desea elegir un elemento aleatorio de su matriz, puede usar el método ".sample":

-   numbers.sample

Para tomar una cantidad X de elementos de un array podemos utilizar:

-   numbers.take(3) => Tomas los primeros 3 elementos del arreglo.
    numbers[0,3] => Toma los elementos empezando desde el índice 0 hasta el 3
    numbers[1..-1] => Toma todos los números dentro de ese rango.

Para tomar una cantidad de elementos después de un índice utilizamos:

-   numbers.drop(3) => [4, 5, 6]

Para darle la vuelta a un arreglo se puede utilizar:

-   words = %w[first second third fourth fifth sixth]
    str = ""
    words.reverse_each {|word| str += "#{word} "}
    p str #=> "sixth fifth fourth third second first "

Para consultar la cantidad de elementos dentro de un array, utilizamos size, length o count.
Para insertar un elemento en cualquier posición se puede utilizar:

-   arr.insert(3, 'apple') #=> [0, 1, 2, 'apple', 3, 4, 5, 6]

Para eliminar los valores de "nil" dentro de un array, podemos utilizar el método .concat.

# HASH

Para crear un Hash, lo podemos hacer de la siguiente manera, utilizando {} y también => para apuntar a cada valor de cada clave:

-   my_hash = {
    "a random word" => "ahoy",
    "Dorothy's math test score" => 94,
    "an array" => [1, 2, 3],
    "an empty hash within a hash" => {}
    }
    O se puede crear un hash, llamando al método "Hash,new":

    my_hash = Hash.new
    my_hash #=> {}

El acceder a los valores funciona de manera similar a acceder a algún elemento dentro de un array:

-   shoes = {
    "summer" => "sandals",
    "winter" => "boots"
    }

-   shoes["summer"] #=> "sandals"

Para añadir datos dentro de un Hash o simplemente cambiar un valor, hacemos lo siguiente:

-   shoes["fall"] = "sneakers"

-   shoes #=> {"summer"=>"sandals", "winter"=>"boots", "fall"=>"sneakers"}

Para eliminar una clave y su contenido hacemos uso del método ".delete":

-   shoes.delete("summer") #=> "flip-flops"
    shoes #=> {"winter"=>"boots", "fall"=>"sneakers"}

Se puede retornar las claves y valores existentes por separado con los métodos ".keys" y ".values":

-   books = {
    "Infinite Jest" => "David Foster Wallace",
    "Into the Wild" => "Jon Krakauer"
    }
    books.keys #=> ["Infinite Jest", "Into the Wild"]
    books.values #=> ["David Foster Wallace", "Jon Krakauer"]

Para unir 2 hashes utilizamos ".merge":

-   hash1 = { "a" => 100, "b" => 200 }
    hash2 = { "b" => 254, "c" => 300 }
    hash1.merge(hash2) #=> { "a" => 100, "b" => 254, "c" => 300 }

## Simbolos como Hash Keys

> 'Rocket' syntax

american_cars = {
:chevrolet => "Corvette",
:ford => "Mustang",
:dodge => "Ram"
}

> 'Symbols' syntax

japanese_cars = {
honda: "Accord",
toyota: "Corolla",
nissan: "Altima"
}

american_cars[:ford] #=> "Mustang"
japanese_cars[:honda] #=> "Accord"

Para acceder a algún elemento de un hash, podemos acerlo con su clave

-   movies{
    :titanic => 1234,
    :interestellar => 2019
    }
    puts movies[:titanic] => 1234

Para iterar sobre los Hashes podemos utilizar el método .each:

-   person = {name: 'bob', height: '6 ft', weight: '160 lbs', hair: 'brown'}
    person.each do |key, value|
    puts "Bob's #{key} is #{value}"
    end

Para iterar cada clave utilizamos .each_key
Para iterar cada valor utilizamos .each_value

-   opposites = {positive: "negative", up: "down", right: "left"}
    opposites.each_key { |key| puts key }
    opposites.each_value { |value| puts value }
    opposites.each { |key, value| puts "The opposite of #{key} is #{value}" }

Podemos definir métodos con hashes opcionales:

-   def greeting(name, options = {})
    if options.empty?
    puts "Hi, my name is #{name}"
    else
    puts "Hi, my name is #{name} and I'm #{options[:age]}" +
    " years old and I live in #{options[:city]}."
    end
    end
    greeting("Bob")
    greeting("Bob", {age: 62, city: "New York City"})

REVIEW: También se puede pasar los elementos de un hash en los parámetros sin las llaves "{}":

-   greeting("Bob", age: 62, city: "New York City")

FIXME: Es posible saber cuando utilizar un Hash o un Arreglo con las siguientes preguntas:

-   Does this data need to be associated with a specific label? If yes, use a hash. If the data doesn't have a natural label, then typically an array will work fine.

-   Does order matter? If yes, then use an array. As of Ruby 1.9, hashes also maintain order, but usually ordered items are stored in an array.

-   Do I need a "stack" or a "queue" structure? Arrays are good at mimicking simple "first-in-first-out" queues, or "last-in-first-out" stacks.

## Métodos con Hashes

Para comprobar que un hash tiene una clave en específico utilizamos .has_key?

-   irb :001 > name_and_age = { "Bob" => 42, "Steve" => 31, "Joe" => 19}
    => {"Bob"=>42, "Steve"=>31, "Joe"=>19}
    irb :002 > name_and_age.has_key?("Steve")
    => true
    irb :003 > name_and_age.has_key?("Larry")
    => false

Para comprobar que un hash tiene un valor específico utilizamos .has_value?

-   has_value?
    if opposites.has_value?("negative")
    puts "Got it!"
    else
    puts "Nope!"
    end

Para seleccionar los elementos con un cierto criterio que se evalúa como verdadero utilizamos .select:

-   irb :004 > name_and_age.select { |k,v| k == "Bob" }
    => {"Bob"=>42}
    irb :005 > name_and_age.select { |k,v| (k == "Bob") || (v == 19) }
    => {"Bob"=>42, "Joe"=>19}

Pasando una clave el método .fetch devuelve su valor; se puede configurar el mensaje en caso de no encontrar esa clave:

-   irb :006 > name_and_age.fetch("Steve")
    => 31
    irb :007 > name_and_age.fetch("Larry")
    => KeyError: key not found: "Larry"
    from (irb):32:in `fetch' from (irb):32 from /usr/local/rvm/rubies/ruby-2.5.3/bin/irb:16:in `<main>'
    irb :008 > name_and_age.fetch("Larry", "Larry isn't in this hash")
    => "Larry isn't in this hash"

El método to_a devuelve un arreglo del hash que tenemos (no es un método destructivo):

-   irb :009 > name_and_age.to_a
    => [["Bob", 42], ["Steve", 31], ["Joe", 19]]
    irb :010 > name_and_age
    => {"Bob"=>42, "Steve"=>31, "Joe"=>19}

# USOS CON STRING

REVIEW: Métodos con STRINGS: https://ruby-doc.org/core-3.0.1/String.html
Para contar cuántas coincidencias hay en un string podemos usar COUNT

-   a = "Hello, world!"
    a.count a # => 13
    a.count "a" # => 0
    a.count "lo" # => 5

Para reemplazar valores dentro de un string

-   puts "The cat and the hat".sub("hat", "rat") #=> The cat and the rat

Para reemplazar todas las coincidencias podemos usar GSUB

-   puts "I own an iPad, iPhone and an iPod".gsub('i', 'my')
-   #=> I own an myPad, myPhone and an myPod

Para CONCATENAR dos STRINGS, podemos utilizar el operador +:

-   "foo" + "faa"
    => "foofaa"

# USOS CON NÚMEROS

-   56.odd? //Para comprobar si es impar
-   56.even? //Para comprobar si es par
-   -56.abs //Para retornar el valor absoluto del número
-   100.99.round //Para redondear al valor más cercano
    Dentro de round puede llevar la cantidad de números que queremos después de la coma

# TIPOS DE CONVERSIONES EN RUBY

Para convertir un STRING en un INTEGER, podemos utilizar lo siguiente:

-   '56'.to_i
    => 56

Para convertir un STRING en un FLOAT, podemos utilizar lo siguiente:

-   '56'.to_f
    => 56.0

Para convertir un FLOAT o un INTEGER en un STRING, podemos utilizar lo siguiente:

-   56.to_s
    => "56"
-   56.0.to_s
    => "56.0"

# CONDICIONALES

Un condicional, se puede ver de las siguientes maneras:

-   if favorite_list.has_key?(:number)
    favorite_list[:number]
    else
    42
    end
-   if statement_to_be_evaluated == true
    do something awesome...
    end

-   if 1 < 2
    puts "Hot diggity, 1 is less than 2!"
    end

Si solo hay una línea de código para evaluar dentro del bloque, entonces puede reescribir el código para que sea más conciso y ocupe solo una línea:

-   puts "Hot diggity damn, 1 is less than 2" if 1 < 2
-   puts "x is 3" if x == 3
-   puts "x is NOT 3" unless x == 3

Para correr un código es una condición es verdadera o fala, podemos utilizar:

-   if attack_by_land == true
    puts "release the goat"
    else
    puts "release the shark"
    end

Para poner varias condiciones podemos utilizar:

-   if attack_by_land == true
    puts "release the goat"
    elsif attack_by_sea == true
    puts "release the shark"
    else
    puts "release Kevin the octopus"
    ends

-   if x == 3 then puts "x is 3" end

Para comprobar tanto el tipo de valor como el valor real que contiene se puede utilizar 5.eql?(5.0) #Falso, uno es integer y el otro es float
a = 2
b = 2

a.equal?(b) #=> True

a = "hello"
b = "hello"
a.equal?(b) #=> false

-   Esto pasa porque la computadora almacena enteros y strings de manera diferente.

<=> (spaceship operator) retorna lo siguiente:

-1 Si el valor en la izquierda es menor que el valor de la derecha.
0 Si el valor de la izquiera es igual al valor de la derecha.
1 Si el valor de la izquierda es mayor que el valor de la izquierda.

-   5 <=> 10 #=> -1
    10 <=> 10 #=> 0
    10 <=> 5 #=> 1

## CASE STATEMENTS

Podemos usar los "case" para probar varias condiciones, funciona similarmente como un switch().
grade = 'F'

-   did_i_pass = case grade #=> create a variable `did_i_pass` and assign the result of a call to case with the variable grade passed in
    when 'A' then "Hell yeah!"
    when 'D' then "Don't tell your mother."
    else "McDonald's is hiring!"
    end

-   case_statement.rb <-- refactored

a = 5

answer = case a
when 5
"a is 5"
when 6
"a is 6"
else
"a is neither 5, nor 6"
end

puts answer

## UNLESS STATEMENTS

Funciona de manera opuesta como una declaración if. El código dentro funciona solamente si la condición se evalúa como falsa.

## TERNARY OPERATOR

Forma: conditional statement ? <execute if true> : <execute if false>

-   age = 18
    response = age < 17 ? "You still have your entire life ahead of you." : "You're all grown up."
    puts response #=> "You're all grown up."

# BUCLES

\*Para terminar un bucle de manera abrupta se puede utilizar "BREAK", para pasar a la siguiente vuelta del ciclo se puede utilizar "NEXT"; esto lo podemos utilizar en todos los ciclos que hay en Ruby.
\*BREAK es equivalente a BREAK en Javascript
\*NEXT es equivalente a CONTINUE en Javascript

## LOOP: Se hace de la siguiente manera:

-   i = 0
    loop do
    puts "i is #{i}"
    i += 1
    break if i == 10
    end

-   loop do
    puts "Do you want to do that again?"
    answer = gets.chomp
    if answer != 'Y'
    break
    end
    end

## WHILE LOOP:

Se hace de la siguiente manera y difiere del anterior porque en este bucle declaramos la condición al principio. Cuando una condición se vuelve falsa, automáticamente deja de ejecutarse el código dentro de la sentencia WHILE.

-   i = 0
    while i < 10 do
    puts "i is #{i}"
    i += 1
    end
-   while gets.chomp != "yes" do
    puts "Will you go to prom with me?"
    end

## UNTIL LOOP:

Es lo contrario a WHILE LOOP; este loop se ejecuta mientras la condición sea falsa. Cuando una condición se vuelve verdadera, automáticamente deja de ejecutarse el código dentro de la sentencia UNTIL.

-   i = 0
    until i >= 10 do
    puts "i is #{i}"
    i += 1
    end
-   until gets.chomp == "yes" do
    puts "Will you go to prom with me?"
    end

## DO/WHILE LOOPS:

El código dentro del DO, se ejectua una vez antes de comprobar si se debería ejecutar el código.

-   begin
    puts "Do you want to do that again?"
    answer = gets.chomp
    end while answer == 'Y'

## RANGES:

Todo lo que tenemos que hacer es darle a Ruby el valor inicial, el valor final y si queremos que el rango sea inclusivo o exclusivo.

-   (1..5) # inclusive range: 1, 2, 3, 4, 5
    (1...5) # exclusive range: 1, 2, 3, 4

We can make ranges of letters, too!

-   ('a'..'d') # a, b, c, d

## FOR LOOP:

Se utiliza para iterar a través de una colección de información, como una matriz o un rango. Comienza con la palabra reservada FOR, seguida de una variable, luego la palabra reservada IN y luego una COLECCIÓN DE ELEMENTOS. Mostraremos esto usando una matriz y un rango. Un rango es un tipo especial en Ruby que captura una variedad de elementos. Por ejemplo, 1..3 es un rango que captura los números enteros 1, 2 y 3.

-   for i in 0..5
    puts "#{i} zombies incoming!"
    end
    #0 zombies incoming!
    #1 zombies incoming!
    #2 zombies incoming!
    #3 zombies incoming!
    #4 zombies incoming!
    #5 zombies incoming!

-   x = [1, 2, 3, 4, 5]
    for i in x do
    puts i
    end
    puts "Done!"

## TIMES LOOP:

Funciona iterando a través de un bucle un número específico de veces e incluso ofrece la ventaja de acceder al número por el que está iterando actualmente.

-   5.times do
    puts "Hello, world!"
    end
-   5.times do |number|
    puts "Alternative fact number #{number}"
    end

*   Recuera que este bucle empieza iterando desde 0 y lo hace hasta 4 ya que tiene la orden de correr el código 5 veces.

## UPTO y DOWNTO LOOPS:

Puede utilizar estos métodos para iterar desde un número inicial hacia arriba o hacia abajo hasta otro número, respectivamente.

-   5.upto(10) {|num| print "#{num} " } #=> 5 6 7 8 9 10

    10.downto(5) {|num| print "#{num} " } #=> 10 9 8 7 6 5

STEP: Esto omite 2 en lugar de omitir 1, lo que equivale a hacer i + = 2 si estuviera usando su bucle for clásico (o un bucle while), por lo que terminamos imprimiendo lo siguiente:

-   ruby 1.paso (10, 2) {| i | imprimir "# {i}"}

=> 10 20 30 40 50 60 70 80 90 100

# ITERADORES

## .EACH:

Va por cada elemento del conjunto. Para imprimir cada elemento de un conjunto de elementos.
Pasará automáticamente cualquier elemento en el que se encuentre actualmente a su bloque de código.
Podemos llamar a cada elementos poniéndolo entre líneas verticales: |current_name|

-   |name| => Todo lo que está dentro de las líneas verticales se llama bloque de código y podemos utilizar cualquier nombre dentro de estas líneas.

-   names = ['Bob', 'Joe', 'Steve', 'Janice', 'Susan', 'Helen']
    names.each { |name| puts name }

-   names = ['Bob', 'Joe', 'Steve', 'Janice', 'Susan', 'Helen']
    x = 1
    names.each do |name|
    puts "#{x}. #{name}"
    x += 1
    end

-   > guys = ["Bob", "Billy", "Joe"]
    > guys.each do |current_name| # better to call it just "name" in your code
    > print "#{current_name}! "
    > end
    > Bob! Billy! Joe! => ["Bob", "Billy", "Joe"] # returns original array

## .EACH_WITH_INDEX:

Funciona de manera similar a .each solo con la modificación de que se puede usar más variables dentro del bloque de código ||, la primera variable siempre va a ser el valor y la segunda variable, siempre va a ser el índice:

-   fruits = ["apple", "banana", "strawberry", "pineapple"]
    fruits.each_with_index { |fruit, index| puts fruit if index.even? }
    #=> apple
    #=> strawberry
    #=> ["apple", "banana", "strawberry", "pineapple"]

## MAP:

Transforma cada elemento de una matriz de acuerdo con cualquier bloque que le pase y devuelve los elementos transformados en una nueva matriz.

-   friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
    friends.map { |friend| friend.upcase }
    #=> `['SHARON', 'LEO', 'LEILA', 'BRIAN', 'ARUN']`

-   my_order = ['medium Big Mac', 'medium fries', 'medium milkshake']
    my_order.map { |item| item.gsub('medium', 'extra large') }
    #=> ["extra large Big Mac", "extra large fries", "extra large milkshake"]

-   salaries = [1200, 1500, 1100, 1800]
    salaries.map { |salary| salary - 700 }
    #=> [500, 800, 400, 1100]

-   ["11", "21", "5"].map(&:to_i)
-   ["orange", "apple", "banana"].map(&:class)

\*\ Each siempre retorna el original, sin hacer cambios al objeto.
Mientras MAP hace la misma cosa, pero...
Él retorna un nuevo array con los elementos transformados.

## SELECT:

También llamado (#FILTER). Pasa todos los elementos de una matriz a un bloque y devuelve una nueva matriz con solo los elementos para los que la condición establecida en el bloque se evaluó como verdadera.

-   friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
    friends.select { |friend| friend != 'Brian' }
    #=> ["Sharon", "Leo", "Leila", "Arun"]

-   responses = { 'Sharon' => 'yes', 'Leo' => 'no', 'Leila' => 'no', 'Arun' => 'yes' }
    responses.select { |person, response| response == 'yes'}
    #=> {"Sharon"=>"yes", "Arun"=>"yes"}

## REDUCE:

También llamado (#INJECT). Reduce una matriz o hash a un solo objeto. Debe usar #reduce cuando desee obtener una salida de un solo valor.

-   my_numbers = [5, 6, 7, 8]
    my_numbers.reduce { |sum, number| sum + number }
    #=> 26 - El primer valor dentro del bloque de código |sum, number|, (sum en este caso), es el acumulador que es el valor que el método #REDUCE devuelve al final de todas las iteraciones.

    \* Tamién le podemos pasar un valor inicial por defecto:

    -   my_numbers = [5, 6, 7, 8]
        my_numbers.reduce(1000) { |sum, number| sum + number }
        #=> 1026

-   votes = ["Bob's Dirty Burger Shack", "St. Mark's Bistro", "Bob's Dirty Burger Shack"]
    votes.reduce(Hash.new(0)) do |result, vote|
    result[vote] += 1
    result
    end
    #=> {"Bob's Dirty Burger Shack"=>2, "St. Mark's Bistro"=>1}

Para imprimir el valor de los métodos enumerables podemos hacerlo mediante la asignación de una variable o la definición de un método:

-   friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
    invited_friends = friends.select { |friend| friend != 'Brian' }
    friends
    #=> ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
    invited_friends
    #=> ["Sharon", "Leo", "Leila", "Arun"]

-   friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
    def invited_friends(friends)
    friends.select { |friend| friend != 'Brian' }
    end
    friends
    #=> ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
    invited_friends(friends)
    #=> ["Sharon", "Leo", "Leila", "Arun"]

FIXME: Hoja de referencia de enumerables iteradores

> EACH devuelve el objeto original al que se llamó porque realmente se usa por sus efectos secundarios y no por lo que devuelve

> each_with_index pasa no solo el elemento actual sino cualquier posición en la matriz en la que se encontraba.

> select devuelve un nuevo objeto (por ejemplo, una matriz) lleno solo con los elementos originales donde el bloque que le dio devolvió verdadero

> map devuelve una nueva matriz llena de lo que devuelve el bloque cada vez que se ejecuta.

> any? devuelve verdadero / falso (¿ve el signo de interrogación?) y responde la pregunta "¿ALGUNO de los elementos de este objeto pasa la prueba en mi bloque?". Si su bloque devuelve verdadero en cualquier momento en que se ejecute, ¿alguno? volverá verdadero.

> all? devuelve verdadero / falso y responde la pregunta, "¿TODOS los elementos de este objeto pasan la prueba en mi bloque?". Cada vez que se ejecuta el bloque, debe devolver verdadero para que este método lo devuelva.

> none? devuelve verdadero solo si NINGUNO de los elementos del objeto devuelve verdadero cuando se ejecuta el bloque.

> find devuelve el primer elemento de su objeto para el que el bloque devuelve verdadero.

> group_by ejecutará su bloque y devolverá un hash que agrupa todos los diferentes tipos de devoluciones de ese bloque. Por ejemplo:

-   > names = ["James", "Bob", "Joe", "Mark", "Jim"]
    > names.group_by{|name| name.length}
    > => {5=>["James"], 3=>["Bob", "Joe", "Jim"], 4=>["Mark"]}

> grep devuelve una matriz con aquellos elementos que realmente coinciden con los criterios especificados (RegEx) (usando una coincidencia ===):

-   > names.grep(/J/)
    > => ["James", "Joe", "Jim"]

# RECURSIVIDAD

Es llamar a una función dentro de su misma función.
Podemos definir métodos de la siguiente manera:

-   def doubler(start)
    puts start \* 2
    end

    doubler(4) # => 8

    > Principios de recursión

    > -   Un objetivo final o un caso base
    >     Un proceso en el que la tarea en cuestión se reduce hacia ese objetivo final.

## EJEMPLO

### Ejemplo de varias líneas

-   El algoritmo recursivo no requiere un bucle.
    En cambio, definimos un método que acepta un argumento: una matriz de valores
    Si la matriz tiene dos valores o menos, devuelve el mayor de los dos valores
    Si la matriz tiene más de dos valores, divídala en dos matrices. Luego, invoque el método dos veces más para manejar cada submatriz

    -   def rock_judger(rocks_arr)
        if rocks_arr.length <= 2 # the base case
        a = rocks_arr[0]
        b = rocks_arr[-1]
        else
        a = rock_judger(rocks_arr.slice!(0,rocks_arr.length/2))
        b = rock_judger(rocks_arr)
        end
        return a > b ? a : b
    -   end
        rocks = 30.times.map{rand(200) + 1}
        puts rocks.join(', ')
        puts "Heaviest rock is: #{rock_judger(rocks)}"

### Ejemplo de 2 líneas

-   def rock_judger(r_arr)  
     count = r_arr.length
    a,b = count <= 2 ? [r_arr[0], r_arr[-1]] : [rock_judger(r_arr.pop(count/2)), rock_judger(r_arr)]
    return a > b ? a : b
    end

REVIEW: \* Podemos decir que es similar a declarar una función en Javascript.

-   def doubler(start)
    puts start
    if start < 10
    doubler(start \* 2)
    end
    end

doubler (4) # => 4 / 8 / 16

REVIEW:
Break (break): Detendrá el bucle actual. A menudo se usa con un if para especificar bajo qué condiciones hacer eso.
Next (next): Saltará a la siguiente iteración. También se suele utilizar con una declaración if.
Rehacer (redo): Le permitirá reiniciar el ciclo (sin evaluar la condición en el primer paso), nuevamente, por lo general, con alguna condición
Reintentar (retry): Funciona en la mayoría de los bucles (no mientras o hasta) de manera similar a rehacer, pero volverá a evaluar la condición antes de ejecutar el bucle nuevamente (por lo tanto, intente en lugar de hacerlo).

NOTE: ¡NO use return para salir de un bucle, ya que eso saldrá de todo el método que lo contiene también!

# MÉTODOS

Un método tiene estructura similar a la de una función en javascript. Un método es el comportamiento de un objeto.
Los objetos tienen métodos, lo que nos permite hacer cosas interesantes con ellos. Los métodos de un objeto son cosas que el objeto puede hacer.
Para crear un método lo hacemos de la siguiente manera:

-   def metodo_muestra do
    "Hola Juan"
    end
    puts metodo_muestra #=> "Hola Juan"

-   def greet(name)
    "Hello, " + name + "!"
    end
    puts greet("John") #=> Hello, John!

    REVIEW: Un parámetro es aquello que utiliza la función o el método para trabajar:

    -   def greet(name) #"name" es el parámetro
        "Hello, " + name + "!"
        end
        puts greet("John") #=> Hello, John!

    REVIEW: Un argumento es aquello que se le pasa por la posición del parámetro al llamar a la función o método.

    -   greet("John") #=> John es el argumento

    REVIEW: El retorno implícito es aquella línea que se evalúa al final de un código
    REVIEW: Un retorno explícito es aquel que hace uso de la palabra "return" y le dice al programa que: "Esta es la última línea que hay que evaluar"

Se pueden unir varios métodos en una sola línea como:

-   phrase = ["be", "to", "not", "or", "be", "to"]
    puts phrase.reverse.join(" ").capitalize
    #=> "To be or not to be"

Para hacer métodos de predicados que son aquellos que devuelven true si es verdadero o false si es falso podemos utilizar el signo de interrogación: (?)

-   puts 5.even? #=> false
    puts 6.even? #=> true
    puts 17.odd? #=> true
    puts 12.between?(10, 15) #=> true

Para hacer métodos destructivos hacemos uso de (!) al final de un método.
Para poner un valor por defecto a un método hacemos uso de la siguiente forma:

-   def say(words='hello')
    puts words + '.'
    end
    say() #=> hello.
    say("hi")
    say("how are you")
    say("I'm fine")

## INCLUDE?:

Sirve para comprobar si existe un elemento dentro del arreglo o hash.

-   numbers = [5, 6, 7, 8]
    numbers.include?(6)
    #=> true
    numbers.include?(3)
    #=> false

-   friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
    invited_list = friends.select { |friend| friend != 'Brian' }
    invited_list.include?('Brian')
    #=> false

## ANY?:

Devuelve TRUE si uno o más elementos coincidieron con la búsqueda dentro del bloque de código:

-   numbers = [21, 42, 303, 499, 550, 811]
    numbers.any? { |number| number > 500 }
    #=> true
    numbers.any? { |number| number < 20 }
    #=> false

## ALL?:

Devuelve TRUE si TODOS los elementos del arreglo o hash coinciden con la búsqueda:

-   fruits = ["apple", "banana", "strawberry", "pineapple"]
    fruits.all? { |fruit| fruit.length > 3 }
    #=> true
    fruits.all? { |fruit| fruit.length > 6 }
    #=> false

## NONE?:

Devuelve TRUE si ninguno de los elementos del arreglo o hash coincide con la búsqueda:

-   fruits = ["apple", "banana", "strawberry", "pineapple"]
    fruits.none? { |fruit| fruit.length > 10 }
    #=> true
    fruits.none? { |fruit| fruit.length > 6 }
    #=> false

# COLECCIÓNES ANIDADAS

Una matriz que contiene otras matrices se denomina matriz anidada o matriz multidimensional.

-   test_scores = [
    [97, 76, 79, 93],
    [79, 84, 76, 79],
    [88, 67, 64, 76],
    [94, 55, 67, 81]
    ]
    teacher_mailboxes = [
    ["Adams", "Baker", "Clark", "Davis"],
    ["Jones", "Lewis", "Lopez", "Moore"],
    ["Perez", "Scott", "Smith", "Young"]
    ]

Para acceder a los datos dentro de los arreglos anidados podemos pensar en matrices, así:

-   teacher_mailboxes[0][0]
    #=> "Adams"
    teacher_mailboxes[1][0]
    #=> "Jones"
    teacher_mailboxes[2][0]
    #=> "Perez"

#DIG: Si desea que se devuelva un valor nulo al intentar acceder a un índice de un elemento anidado inexistente, puede usar el método #dig. Este método también se puede utilizar al acceder a un índice inexistente dentro de un elemento anidado existente.

-   teacher_mailboxes.dig(3, 0)
    #=> nil
    teacher_mailboxes.dig(0, 4)
    #=> nil

Para crear un arreglo anidado podemos utilizar:

-   mutable = Array.new(3, Array.new(2))
    #=> [[nil, nil], [nil, nil], [nil, nil]]
    mutable[0][0] = 1000
    #=> 1000
    mutable
    #=> [[1000, nil], [1000, nil], [1000, nil]]

-   immutable = Array.new(3) { Array.new(2) }
    #=> [[nil, nil], [nil, nil], [nil, nil]]
    immutable[0][0] = 1000
    #=> 1000
    immutable
    #=> [[1000, nil], [nil, nil], [nil, nil]]

Si queremos añadir o eliminar elementos al final de un arreglo podemos utilizar el método #PUSH
Si queremos añadir o eliminar elementos al final de una matriz anidada, debemos especificar el índice:

-   test_scores << [100, 99, 98, 97]
    #=> [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81], [100, 99, 98, 97]]
    test_scores[0].push(100)
    #=> [97, 76, 79, 93, 100]
    test_scores
    #=> [[97, 76, 79, 93, 100], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81], [100, 99, 98, 97]]

-   test_scores.pop
    #=> [100, 99, 98, 97]
    test_scores[0].pop
    #=> 100
    test_scores
    #=> [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81]]

Encuentro útil pensar que una matriz anidada tiene filas y columnas. Cada fila es el elemento anidado y cada columna es el índice del elemento anidado. Cuando iteramos sobre el ejemplo teacher_mailboxes, cada elemento será una fila.

-   teacher_mailboxes.each_with_index do |row, row_index|
    puts "Row:#{row_index} = #{row}"
    end
    #=> Row:0 = ["Adams", "Baker", "Clark", "Davis"]
    #=> Row:1 = ["Jones", "Lewis", "Lopez", "Moore"]
    #=> Row:2 = ["Perez", "Scott", "Smith", "Young"]
    #=> [["Adams", "Baker", "Clark", "Davis"], ["Jones", "Lewis", "Lopez", "Moore"], ["Perez", "Scott", "Smith", "Young"]]

Para iterar sobre los elementos individuales dentro de cada fila, necesitará anidar otro método enumerable dentro.

-   teacher_mailboxes.each_with_index do |row, row_index|
    row.each_with_index do |teacher, column_index|
    puts "Row:#{row_index} Column:#{column_index} = #{teacher}"
    end
    end
    #=> Row:0 Column:0 = Adams
    #=> Row:0 Column:1 = Baker
    #=> Row:0 Column:2 = Clark
    #=> Row:0 Column:3 = Davis
    #=> Row:1 Column:0 = Jones
    #=> Row:1 Column:1 = Lewis
    #=> Row:1 Column:2 = Lopez
    #=> Row:1 Column:3 = Moore
    #=> Row:2 Column:0 = Perez
    #=> Row:2 Column:1 = Scott
    #=> Row:2 Column:2 = Smith
    #=> Row:2 Column:3 = Young
    #=> [["Adams", "Baker", "Clark", "Davis"], ["Jones", "Lewis", "Lopez", "Moore"], ["Perez", "Scott", "Smith", "Young"]]

Si solo queremos el nombre de profesores, podemos utilizar el método flatten para aplanar la matriz:

-   teacher_mailboxes.flatten.each do |teacher|
    puts "#{teacher} is amazing!"
    end
    #=> Adams is amazing!
    #=> Baker is amazing!
    #=> Clark is amazing!
    #=> Davis is amazing!
    #=> Jones is amazing!
    #=> Lewis is amazing!
    #=> Lopez is amazing!
    #=> Moore is amazing!
    #=> Perez is amazing!
    #=> Scott is amazing!
    #=> Smith is amazing!
    #=> Young is amazing!
    #=> ["Adams", "Baker", "Clark", "Davis", "Jones", "Lewis", "Lopez", "Moore", "Perez", "Scott", "Smith", "Young"]

Ahora echemos un vistazo a un ejemplo más complicado de anidar dos predicados enumerables juntos. Utilizando la matriz anidada de puntajes de las pruebas anterior, determinemos si algún estudiante obtuvo una puntuación superior a 80 en todo.

-   test_scores = [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81]]
    #=> [[97, 76, 79, 93], [79, 84, 76, 79], [88, 67, 64, 76], [94, 55, 67, 81]]
    test_scores.any? do |scores|
    scores.all? { |score| score > 80 }
    end
    #=> false

-   test_scores.all? do |scores|
    scores.any? { |score| score > 80 }
    end
    #=> true

# HASHES ANIDADOS

vehicles = {
alice: {year: 2019, make: "Toyota", model: "Corolla"},
blake: {year: 2020, make: "Volkswagen", model: "Beetle"},
caleb: {year: 2020, make: "Honda", model: "Accord"}
}

Para acceder a los datos, podemos hacer un uso similar de las arreglos:

-   vehicles[:alice][:year]
    #=> 2019
    vehicles[:blake][:make]
    #=> "Volkswagen"
    vehicles[:caleb][:model]
    #=> "Accord"

El método DIG puede servir para devolver nil cuando no existe un hash anidado:

-   vehicles[:zoe][:year]
    #=> NoMethodError
    vehicles.dig(:zoe, :year)
    #=> nil
    vehicles[:alice][:color]
    #=> nil
    vehicles.dig(:alice, :color)
    #=> nil

Para añadir un elemento un nuevo conjunto de elementos podemos usar:

-   vehicles[:dave] = {year: 2021, make: "Ford", model: "Escape"}
    #=> {:year=>2021, :make=>"Ford", :model=>"Escape"}
    vehicles
    #=> {:alice=>{:year=>2019, :make=>"Toyota", :model=>"Corolla"}, :blake=>{:year=>2020, :make=>"Volkswagen", :model=>"Beetle"}, :caleb=>{:year=>2020, :make=>"Honda", :model=>"Accord"}, :dave=>{:year=>2021, :make=>"Ford", :model=>"Escape"}}

También se puede añadir un elemento dentro de un hash anidado:

-   vehicles[:dave][:color] = "red"
    #=> "red"
    vehicles
    #=> {:alice=>{:year=>2019, :make=>"Toyota", :model=>"Corolla"}, :blake=>{:year=>2020, :make=>"Volkswagen", :model=>"Beetle"}, :caleb=>{:year=>2020, :make=>"Honda", :model=>"Accord"}, :dave=>{:year=>2021, :make=>"Ford", :model=>"Escape", :color=>"red"}}

Para eliminar un hash podemos utilizar el método DELETE:

-   vehicles.delete(:blake)
    #=> {:year=>2020, :make=>"Volkswagen", :model=>"Beetle"}
    vehicles
    #=> {:alice=>{:year=>2019, :make=>"Toyota", :model=>"Corolla"}, :caleb=>{:year=>2020, :make=>"Honda", :model=>"Accord"}, :dave=>{:year=>2021, :make=>"Ford", :model=>"Escape", :color=>"red"}}

Y también un hash anidado:

-   vehicles[:dave].delete(:color)
    #=> "red"
    vehicles
    #=> {:alice=>{:year=>2019, :make=>"Toyota", :model=>"Corolla"}, :caleb=>{:year=>2020, :make=>"Honda", :model=>"Accord"}, :dave=>{:year=>2021, :make=>"Ford", :model=>"Escape"}}

Podemos hacer uso de varios métodos como de #SELECT:

-   vehicles.select { |\_name, data| data[:year] >= 2020 }
    #=> {:caleb=>{:year=>2020, :make=>"Honda", :model=>"Accord"}, :dave=>{:year=>2021, :make=>"Ford", :model=>"Escape"}}

Para filtrar el nombre de los dueños podemos utilizar el método #MAP o #COLECT:

-   vehicles.collect { |name, data| name if data[:year] >= 2020 }
    #=> [nil, :caleb, :dave]

Para devolver un arreglo o un hash sin valores nulos o falsos, podemos usar el método #COMPACT:

-   vehicles.collect { |name, data| name if data[:year] >= 2020 }.compact
    #=> [:caleb, :dave]

Podemos hacer uso de #FILTER_MAP:

-   vehicles.filter_map { |name, data| name if data[:year] >= 2020 }
    #=> [:caleb, :dave]

# DEBUGGING

La primera línea del seguimiento de la pila generalmente proporcionará la información más útil sobre el error que encontró su programa.
TODO EN RUBY SON OBJETOS, INCLUSO LOS ERRORES

Para ir yendo linea por línea viendo su salida podemos utilizar: "require 'pry'"
Podemos ingresar la varibale que deseamos ver y darle a "next" para saltar la línea

-   require 'pry'
    def double_words_in_phrase(string)
    string_array = string.split(' ')
    binding.pry
    string_array.map { |word| word \* 2 }
    string_array.join(' ')
    end
    double_words_in_phrase("This is a test")

Lista para identificar errores:

-   /tmp/stack.rb:6:in 'method2': undefined local variable or method 'invalid_variable' for main:Object (NameError)
    from /tmp/stack.rb:2:in 'method1'
    from /tmp/stack.rb:9:in '<main>'
    </main>
-   Text Description
    /tmp/stack.rb:6 File and line number
    in `method2‘ Method name
    undefined local variable or method ‘invalid_variable‘ Error message
    main:Object Class name
    (NameError) Exception name

## PASOS PARA SOLUCIONAR PROBLEMAS:

-   Leer la línea superior del seguimiento de la pila
    Si el archivo es parte de su proyecto: abra el archivo con fallas en el número de línea indicado.
    Si no es así, siga recorriendo el seguimiento de la pila hasta que encuentre la primera referencia a un archivo que reconozca.
    Vea si se le ocurre algo obvio y arréglelo (busque las cosas mencionadas en el mensaje de error)
    Si eso no ayuda, necesitará encontrar más información, como los valores de las variables afectadas.

-   Usando PRY, puede hacer que su código se detenga en una línea específica de código (también conocida como punto de interrupción) y lo llevará a un entorno similar a irb, donde puede evaluar el código ruby ​​en el contexto de su proyecto, o ejecutar uno de los muchos comandos de palanca útiles.

-   All you have to do is drop binding.pry where you would like to install a pry breakpoint.
    You will also need to require pry into your project (require 'pry').

Usar PRY puede hacer que el código se pause en una línea específica de código como un breakpoint.

# PROGRAMACIÓN ORIENTADA A OBJETOS

Una clase es solo una forma de organizar y producir objetos con atributos. Se puede pensar en una clase como una fábrica que fabrica objetos. String y Array son ejemplos de clases.

## OBJETOS

Un objeto es una instancia de una clase. Los objetos tienen métodos que se pueden llamar para hacer que el objeto haga cosas. Por ejemplo, el objeto de cadena "hola" tiene el método upcase (). Cuando se llama al método upcase () en "hola" (es decir, "hola" .upcase ()) el objeto "hola" sabe crear otro objeto "HOLA". "bla" es un ejemplo de un objeto que se crea a partir de la clase String. ["uno", "dos"] es un ejemplo de un objeto que se crea a partir de la clase Array.

Crear objetos permite al programador pensar en un nuevo nivel de abstracción. Los objetos se representan como sustantivos del mundo real y se les pueden dar métodos que describan el comportamiento que el programador está tratando de representar.

Ejemplo sencillo:

-   "Matz".length
    ==> 4

The "Matz" object is a string with a .length method and a length attribute of 4.

Ejemplo más complejo de como crear clases:

-   class Language
    def initialize(name, creator)
    @name = name
    @creator = creator
    end
    def description
    puts "I'm #{@name} and I was created by #{@creator}!"
    end
    end
    ruby = Language.new("Ruby", "Yukihiro Matsumoto")
    python = Language.new("Python", "Guido van Rossum")
    javascript = Language.new("JavaScript", "Brendan Eich")
    ruby.description
    python.description
    javascript.description

-   => I'm Ruby and I was created by Yukihiro Matsumoto!
    I'm Python and I was created by Guido van Rossum!
    I'm JavaScript and I was created by Brendan Eich!

## SINTAXIS DE UNA CLASE

Consiste solo en la palabra "class" y el nombre de la clase, y por conveniencia empezar por letra mayúscula y usar la síntaxis de CamelCase:

-   En Ruby, usamos @ antes de una variable para indicar que es una variable de instancia. Esto significa que la variable está asociada a la instancia de la clase.

*   class NewClass
    #Aquí pasan cosas mágicas
    end

*   class Person
    def initialize (name)
    @name = name
    end
    end

*   class Car
    def initialize(make, model)
    @make = make
    @model = model
    end
    end
    kitt = Car.new("Pontiac", "Trans Am")

-   El código del ejemplo anterior crea una instancia, kitt, de la clase Car. kitt tiene su propio @make (“Pontiac”) y @model (“Trans Am”). Esas variables pertenecen a la instancia de kitt, por lo que se denominan variables de instancia.

-   Para crear un objeto o instancia de una clase solo escribimos .new después del nombre de la clase:

*   user = Person.new("Pepe")

*   class Person
    def initialize (name)
    @name = name
    end
    end
    matz = Person.new("Yukihiro")

# DECLARAR VARIABLES EN LAS CLASES DE RUBY

@ => VARIABLES DE INSTANCIA
@@ => VARIABLES DE CLASE // Las variables de clase son como variables de instancia, pero en lugar de pertenecer a una instancia de una clase, pertenecen a la clase misma. Las variables de clase siempre comienzan con dos @s, así: @@ files.
$ => VARIABLES GLOBALES //Se puede solamente declarar como una variable cualquiera pero es una conveniencia.

-   class MyClass
    $my_variable = "Hello!"
    end
    puts $my_variable #=> Hello!

TENER MUCHO CUIDADO CON QUIÉN PUEDE MODIFICAR EL CONTENIDO DE LAS VARIABLES GLOBALES

# HERENCIA

La herencia es el proceso mediante el cual una clase adquiere los atributos y métodos de otra, y se utiliza para expresar una relación es-a.
Una clase hereda los comportamientos de otra clase, denominada superclase.
Esto le da a los programadores de Ruby el poder de definir clases básicas con gran capacidad de reutilización y subclases más pequeñas para comportamientos más detallados y detallados.
Es la capacidad de una clase de ser hija de otra clase y, por lo tanto, heredar todas sus características, incluidos los métodos y las variables.

NOTE: Una clase puede tener solamente una herencia:

-   class Viking < Person

-   class Person
    MAX_HEALTH = 120
    ...
    def heal
    self.health += 1 unless self.health + 1 > MAX_HEALTH
    end
    end
    class Viking < Person
    ...
    def heal
    self.health = [self.health + 2, MAX_HEALTH].min
    puts "Ready for battle!"
    end
    end

-   class ApplicationError
    def display_error
    puts "Error! Error!"
    end
    end
    class SuperBadError < ApplicationError
    end
    err = SuperBadError.new
    err.display_error

*   En el ejemplo anterior se puede apreciar que la clase "SuperBadError" tiene acceso a la clase de "ApplicationError" por definición de herencia

## SINTAXIS DE HERENCIA

-   class ClaseDerivada < ClaseBase
    Some stuff!
    end
    -   La clase derivada es la nueva clase que está creando y la clase base es la clase de la que hereda esa nueva clase. Puede leer "<" como "hereda de".

REVIEW: ANULAR

A veces querrá que una clase que hereda de otra no solo adopte los métodos y atributos de su padre, sino que anule uno o más de ellos.

-   class Creature
    def initialize(name)
    @name = name
    end
    def fight
    return "Punch to the chops!"
    end
    end
-   class Dragon < Creature
    def fight
    return "Breathes fire!"
    end
    end

## "SUPER"

Podemos utilizar la palabra "SUPER" para llamar desde el interior de un método, eso le dice a Ruby que busque en la superclase de la clase actual y encuentre un método con el mismo nombre que el que llama a "super".

-   class Viking < Person
    def initialize(name, health, age, strength, weapon)
    super(name, health, age, strength)
    @weapon = weapon
    end
    end

-   class Creature
    def initialize(name)
    @name = name
    end
    def fight
    return "Punch to the chops!"
    end
    end
    Add your code below!

class Dragon < Creature
def fight
puts "Instead of breathing fire..."
super
end
end
=> Instead of breathing fire...
Punch to the chops!

-   Hay casos en los que desea incorporar datos o comportamiento de varias clases en una sola clase, y Ruby lo permite mediante el uso de mixins.

-   Class Monkey; end => Para declarar clases o métodos en una sola línea podemos saltar las líneas con ";".

-   class Message
    @@messages_sent = 0
    def initialize (from, to)
    @@messages_sent += 1
    @from = from
    @to = to
    end
    end
    class Email < Message
    def initialize (subject)
    @subject = subject
    end
    end
    my_message = Message.new("Hola", " Lenin") => AQUI CREAMOS UNA INSTANCIA DE CLASE

-   class Message
    @@messages_sent = 0
    def initialize (from, to)
    @@messages_sent += 1
    @from = from
    @to = to
    end
    end
    class Email < Message
    def initialize (from, to)
    super
    end
    end

# CLASE PÚBLICA Y PRIVADA

-   La clase pública es donde se puede acceder desde fuera de esa clase
-   La clase privada es aquella que no permite que nadie la moleste o visualice.

-   class Person
    def initialize(name, age)
    @name = name
    @age = age
    end
    public # This method can be called from outside the class.
    def about_me
    puts "I'm #{@name} and I'm #{@age} years old!"
    end
    private # This method can't!
    def bank_account_number
    @account_number = 12345
    puts "My bank account number is #{@account_number}."
    end
    end
    eric = Person.new("Eric", 26)
    eric.about_me => Devuelve el mensaje porque es un método público "public"
    eric.bank_account_number => Devuelve un error porque es un método privado "private"

-   class Viking < Person
    ...
    def take_damage(damage)
    @health -= damage
    die if @health <= 0
    end
    private
    def die
    puts "#{self.name} has been killed :("
    self.dead = true # assume we've defined a `dead` instance variable
    end
    end

    > oleg = Viking.create_warrior("Oleg")
    > oleg.die
    > NoMethodError: private method `die' called for #<Viking:0x007ffd4c041e50>
    > oleg.take_damage(200)
    > Oleg has been killed :(
    > => true
    > NOTE: los métodos privados solo se pueden llamar desde dentro de la misma instancia

-   Los métodos son por defecto, públicos en Ruby.
-   Para hacer un método público, basta con poner la palabra "public" al principio de la definición de método:

*   class Dog
    def initialize(name, breed)
    @name = name
    @breed = breed
    end
    public \*\*\*\*
    def bark
    puts "Woof!"
    end
    end

-   Para hacer un método privado, basta con poner la palabra "private" al principio de la definición de método:

*   class Dog
    def initialize(name, breed)
    @name = name
    @breed = breed
    end
    public
    def bark
    puts "Woof!"
    end
    private
    def id
    @id_number = 12345
    end
    end

## CLASE PROTECTED

Protected proporciona la mayor parte de la privacidad de private pero permite que los métodos dentro de otras instancias de la misma clase o sus descendientes también accedan a él:

-   class Viking < Person
    ...
    def attack(recipient)
    if recipient.dead
    puts "#{recipient.name} is already dead!"
    return false
    end
    damage = (rand \* 10 + 10).round(0)
    recipient.take_damage(damage) # `take_damage` called on `recipient`!
    end
    protected
    def take_damage(damage)
    self.health -= damage
    puts "Ouch! #{self.name} took #{damage} damage and has #{self.health} health left"
    die if @health <= 0  
     `die` called from within the same object as take_damage was (the `recipient` as well!)
    end
    private
    def die
    puts "#{self.name} has been killed :("
    self.dead = true # assume we've defined a `dead` instance variable
    end
    end
    > oleg = Viking.create_warrior("Oleg")
    > => #<Viking:0x007ffd4b8b5588 @age=24.58111251562904, @name="Oleg", @health=120, @strength=10, @dead=false>
    > sten = Viking.create_warrior("Sten")
    > => #<Viking:0x007ffd4b8e1700 @age=28.80998656037281, @name="Sten", @health=120, @strength=10, @dead=false>
    > 10.times { oleg.attack(sten) }
    > Ouch! Sten took 19 damage and has 101 health left
    > Ouch! Sten took 10 damage and has 91 health left
    > Ouch! Sten took 13 damage and has 78 health left
    > Ouch! Sten took 17 damage and has 61 health left
    > Ouch! Sten took 15 damage and has 46 health left
    > Ouch! Sten took 11 damage and has 35 health left
    > Ouch! Sten took 14 damage and has 21 health left
    > Ouch! Sten took 14 damage and has 7 health left
    > Ouch! Sten took 18 damage and has -11 health left
    > Sten has been killed :(
    > Sten is already dead!
    > => 10
    > sten
    > => #<Viking:0x007ffd4c048840 @age=25.601709008134428, @name="Sten", @health=-11, @strength=10, @dead=true>

REVIEW: ATTR_READER, ATTR_WRITER Y ATTR_ACCESSOR

-   class Person
    attr_reader :name => Para leer
    attr_writer :job => Para escribir
    def initialize(name, job)
    @name = name
    @job = job
    end
    end

-   class Person
    attr_accessor :name => Para leer y escribir a la vez
    attr_accessor :job => Para leer y escribir a la vez
    def initialize(name, job)
    @name = name
    @job = job
    end
    end

REVIEW: MODULE
Es una caja de herramientas que contiene un conjunto de métodos y constantes. Puede pensar que los módulos se parecen mucho a las clases, solo los módulos no pueden crear instancias y no pueden tener subclases. ¡Solo se usan para guardar cosas!
Un módulo debe mezclarse con una clase mediante la invocación del método "include". Esto se llama mixin. Después de mezclar en un módulo, los comportamientos declarados en ese módulo están disponibles para la clase y sus objetos.

-   SINTAXIS

-   module ModuleName
    Bits 'n pieces
    end

-   module MyLibrary
    FAVE_BOOK = "La Cabaña del Tío Tom"
    end

*   Para acceder a un elemento dentro de cualquier modulo como el preexistente "Math" podemos utilizar el: scope resolution operator (::)

-   p Math::PI # => 3.1416...
-   module MyLibrary
    FAVE_BOOK = "La Cabaña del Tío Tom"
    end
    p MyLibrary::FAVE_BOOK

Algunos módulos, como Math, ya están presentes en el intérprete. Sin embargo, otros deben incluirse explícitamente, y podemos hacerlo usando "require". Podemos hacer esto simplemente escribiendo:

-   require 'module'
-   require 'date'
    puts Date.today

¡Cualquier clase que incluya un determinado módulo puede usar los métodos de esos módulos! Un buen efecto de esto es que ya no tiene que anteponer sus constantes y métodos con el nombre del módulo. Dado que todo se ha extraído, simplemente puede escribir PI en lugar de Math :: PI.

-   class Angle
    include Math => Aquí añadimos el modulo MATH con INCLUDE
    attr_accessor :radians
    def initialize(radians)
    @radians = radians
    end
    def cosine
    cos(@radians)
    end
    end
    acute = Angle.new(1)
    acute.cosine

Cuando un módulo se utiliza para mezclar comportamiento e información adicionales en una clase, se denomina mixin. ¡Los Mixins nos permiten personalizar una clase sin tener que reescribir el código!

-   module Action
    def jump
    @distance = rand(4) + 2
    puts "I jumped forward #{@distance} feet!"
    end
    end
    class Rabbit
    include Action
    attr_reader :name
    def initialize(name)
    @name = name
    end
    end
    class Cricket
    include Action
    attr_reader :name
    def initialize(name)
    @name = name
    end
    end
    peter = Rabbit.new("Peter")
    jiminy = Cricket.new("Jiminy")
    peter.jump
    jiminy.jump

*   En el ejemplo anterior se puede ver como hacemos uso de un modulo dentro de una clase.

*   Ahora podemos ver como un módulo puede pertenecer a varias clases.

-   module MartialArts
    def swordsman
    puts "I'm a swordsman"
    end
    end
    class Ninja
    include MartialArts
    def initialize(clan)
    @clan = clan
    end
    end
    class Samurai
    include MartialArts
    def initialize(shogun)
    @shogun = shogun
    end
    end

REVIEW: Mientras que include mezcla los métodos de un módulo a nivel de instancia (permitiendo que las instancias de una clase particular usen los métodos), la palabra clave extend mezcla los métodos de un módulo a nivel de clase. Esto significa que la propia clase puede usar los métodos, a diferencia de las instancias de la clase.

-   module ThePresent
    def now
    puts "It's #{Time.new.hour > 12 ? Time.new.hour - 12 : Time.new.hour}:#{Time.new.min} #{Time.new.hour > 12 ? 'PM' : 'AM'} (GMT)."
    end
    end
    class TheHereAnd
    extend ThePresent
    end
    TheHereAnd.now => It's 2:55 PM (GMT).

TODO: PRÁCTICA

-   CLASE PÚBLICA Y PRIVADA
-   class Application
    attr_accessor :status
    def initialize; end
    public
    def print_status
    puts "All systems go!"
    end
    private
    def password
    return 12345
    end
    end

-   MODULOS
-   module Languages
    FAVE = "JavaScript"
    end

-   Para incluir el módulo a una clase:
-   module Languages
    FAVE = "Ruby" # This is what you typed before, right? :D
    end
    class Master
    include Languages
    def initialize; end
    def victory
    puts FAVE
    end
    end
    total = Master.new
    total.victory

# RESUMEN: POO

CLASES EN RUBY
Una clase Ruby se utiliza para organizar y modelar objetos con atributos y métodos similares.

-   class NewClass
    code for this class
    end

Método Inicializador En Clases
En una clase Ruby, se usa un método de inicialización para generar nuevas instancias de la clase. Suele ser el primer método de una clase.

-   class Person
    def initialize # this code runs when a new instance is created
    end
    end

TIPOS DE VARIABLES EN LAS CLASES

-   @variable => Variable de Instancia
-   @@varible => Variable de Clase
-   $variable => Variable Global

PARA CREAR INSTANCIAS DE UNA CLASE:
En Ruby, se puede crear una nueva instancia de clase llamando al método .new de la clase. Los argumentos del método de inicialización de la clase se pueden pasar a la llamada .new.

-   class Fighter
    def initialize(name, style, division, age)
    @name = name
    @style = style
    @division = division
    @age = age
    end
    end
    conor = Fighter.new("Conor", "mixed martial arts", "Welterweight", 31)

SUPER KEYWORD
La palabra clave "SUPER" incorporada de Ruby se usa para acceder directamente a los atributos o métodos de una superclase. Esto significa que una clase con super heredará los atributos o métodos de una superclase.

-   class Trip
    def initialize(duration, price)
    @duration = duration
    @price = price
    end
    end
    class Cruise < Trip
    def initialize(duration, price)
    super
    end
    end
    spain_backpacking = Trip.new(14, 800.00)
    carnival = Cruise.new(7, 2400.00)

ATTR
En Ruby, attr_reader y attr_writer son métodos que se utilizan para leer y escribir variables, respectivamente.

-   class Student
    attr_reader :name
    attr_writer :name
    def initialize(name)
    @name = name
    end
    end
    #In this example, Ruby is able to both read and write the @name instance variable since it was passed to attr_reader and attr_writer as a symbol.
    top_student = Student.new("Jyothi")
    puts top_student.name # => Jyothi
    #In classes with attr_reader, instance variables can be accessed using . notation
    puts top_student.name # => Jyothi
    top_student.name = "Anika"
    puts top_student.name # => Anika
    #In classes with attr_writer, instance variables can be reassigned using . notation

# ENCAPSULAMIENTO

La encapsulación está ocultando partes de la funcionalidad y haciendo que no esté disponible para el resto de la base del código.

# POLIMORFISMO

Es la capacidad de diferentes tipos de datos para responder a una interfaz común.

NOTE: Cuando descubra que desea que se ejecute el mismo método en un montón de objetos diferentes sin tener que hacer un montón de declaraciones if / else o case diferentes, debería empezar a pensar en utilizar una clase.

Las variables de instancia son parte de la configuración del estado de su objeto. Cuando se destruye su instancia, también pierde el acceso a sus variables de instancia.

Dado que los métodos se llaman en una instancia individual de la clase Viking, se denominan Métodos de instancia

-   class Viking
    def initialize(name, age, health, strength) # codecodecode
    end
    def attack(enemy) # code to fight
    end
    end

<Viking:0x007ffc0597bae0> Es la posición de memoria en donde se guarda el objeto creado de la clase

# GETTERS AND SETTERS

REVIEW: Para acceder a un parámetro expecífico podemos definir un método que nos ayude con una variable de instancia.

-   def health
    @health
    end
    > oleg.health
    > => 87

*   ¿Qué pasa si decide que desea establecer esa variable usted mismo? Necesita crear un método setter, que es una sintaxis similar al getter pero con un signo igual y tomando un argumento:

-   def health=(new_health)
    @health = new_health
    end

Para evitar hacer lo que las líneas 1670 a 1682 dicen, es mejor utilizar esto:

Utilizar attr_reader :variable => Para leer la variable
Utilizar attr_writer :variable => Para reescribir la variable
Utilizar attr_accesor :varibale => Para hace ambas cosas de la parte anterior

-   Ejemplo de attr_accesor:
-   class Viking
    attr_accessor :name, :age, :health, :strength
    codecodecode
    end

*   Una variable de clase tiene más prioridad que una variable de instancia.
    En el siguiente ejemplo vamos a ver que todos los Vikingos empiezan con una salud igual:

-   class Viking
    @@starting_health
    def initialize(name, age, strength)
    @health = @@starting_health # ...other stuff
    end
    end

REVIEW: Para declarar métodos de clase podemos poner la palabra "self" antes del nombre del método. Así:

-   def self.class_method

Para evitar pasar tantos argumentos a la llamada de métodos de instancia podemos hacer uso de la definición de métodos de clase:

## Método de Fábrica

-   class Viking
    def initialize(name, health, age, strength)
    #... set variables
    end
    def self.create*warrior(name) => Solo necesitamos el nombre y ya vamos a poder conseguir los demás parámetros del método "initialize".
    age = rand * 20 + 15 # remember, rand gives a random 0 to 1
    health = [age _ 5, 120].min
    strength = [age / 2, 10].min
    Viking.new(name, health, age, strength) # returned
    end
    end
    > sten = Viking.create_warrior("Sten")
    > => #<Viking:0x007ffc05a79848 @age=21.388120526202737, @name="Sten", @health=106.94060263101369, @strength=10>

A menudo, hay cosas que necesita que todos los vikingos "sepan" o sepan hacer:

-   class Viking
    ...
    def self.random_name # useful for making new warriors!
    ["Erik","Lars","Leif"].sample
    end
    def self.silver_to_gold(silver_pieces)
    silver_pieces / 10
    end
    class << self # The less common way
    def gold_to_silver(gold_pieces)
    gold_pieces \* 10
    end
    end
    end
    > warrior1 = Viking.create_warrior(Viking.random_name)
    > => #<Viking:0x007ffc05a745c8 @age=22.369775138257097, @name="Lars", @health=111.84887569128549, @strength=10>

# Conceptos básicos rápidos

-   Las clases son útiles para usar cuando desea dar métodos a sus datos o tener múltiples instancias de sus datos
-   Los métodos de clase tienen acceso a otros métodos de clase y variables de clase, pero no tienen acceso a métodos de instancia o variables de instancia
-   Los métodos de instancia pueden llamar a otros métodos de instancia, variables de instancia, métodos de clase o variables de clase

REVIEW: La diferencia entre clase y módulo es que la clase puede ser instanciada y los módulos no.

> Tenemos un método de clase y queremos llamarlo

class Fish
def self.general_overview()
return("Fish are animals that live in the sea")
end
end

> Lo hacemos así:

-   puts Fish.general_overview()
    nemo = Fish.new
    puts nemo.general_overview() # doesn't work

Array.ancestors() Sirve para retornar todos los objetos detrás:

-   Array.ancestors() returns the following array: [Array, Enumerable, Object, Kernel, BasicObject].
