// @ts-nocheck
//1. Crea un genérico para la siguiente abstracción:
function identity1(arg: number): number {
  return arg
}
function identity2(arg: string): string {
  return arg
}
function identity3(arg: boolean): boolean {
  return arg
}
//
function identity<Type>(arg: Type): Type {
  return arg
}

//2. Crea un genérico para la siguiente abstracción:
class Generic1 {
  foo?: number
  bar(x: number): number {
    return x
  }
}
class Generic2 {
  foo?: string
  bar(x: string): string {
    return x
  }
}
//
class Generic<Type = string> {
  foo?: Type
  bar(x: Type): Type {
    if (typeof x === 'string') {
      x.length
    } else if (typeof x === 'number') {
      x.toExponential()
    }
    return x as ReturnType
  }
}

//3. Sobre el ejercicio anterior dale un valor por defecto.
//4. Sobre el ejercicio anterior añade un segundo tipo al genérico para que el método devuelva otro tipo distinto
