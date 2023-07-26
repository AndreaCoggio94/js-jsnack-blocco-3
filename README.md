# JSnack

## traccia 1

Chiedi all'utente un primo numero, poi un secondo e genera un numero casuale compreso tra i due.

## svolgimento traccia 1

- chiedi utente numero uno
- chiedi utente numero due
- genera numero casuale che viene moltiplicato per il primo - il secondo
- aggiungi il secondo numero

## traccia 2

Dare la possibilità di inserire due parole. Verificare che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

## svolgimento traccia 2

- chiedi utente una parola
- chiedi utente una seconda parola
- **SE** le due parole hanno la stessa lunghezza
  - stampale entrambe
- **ALTRIMENTI**
  - **SE** prima parola più grande
    - stampa la prima parola
  - **SE** seconda parola più grande
    - stampa seconda parola

## traccia 3

Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

## svolgimento traccia 3

- crea array vuoto
- crea variabile "totale" che tiene conto della somma
- **FINCHE'** la variabile "totale" è minore di 50
  - chiedi all'utente un numero
  - **SE** il numero inserito dall'utente è inferiore o uguale di 50
  - prendo la variabile "totale" e la sommo con il numero dell'utente
  - aggiungo numero ad array vuoto

## traccia 4

Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.
Calcola la media dei numeri inseriti.

## svolgimento traccia 4

- crea array vuoto
- crea variabile "totale" che tiene conto della somma
- **FINCHE'** la variabile "totale" è minore di 50
  - chiedi all'utente un numero
  - **SE** il numero inserito dall'utente è inferiore o uguale di 50
  - prendo la variabile "totale" e la sommo con il numero dell'utente
  - aggiungo numero ad array vuoto
- per fare la media prendo variabile "totale" e la divido per la lunghezza dell'array

## traccia 5

Trovare gli errori nel seguente codice:

---

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = "";
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
    }
    console.log(evenNumbers);

    // dovrebbe restituire [1,3,5]

---

## svolgimento traccia 5

- errore nel secondo let
  - corretto inserendo = [] al posto dei "";
- errore nel ciclo for
  - corretto togliendo la ";" da i++
- errore nell' if
  - corretto inserendo "numbers[i]
  - aggiungendo un "="
  - rimuovendo ";" dalla parentesi
