import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({name:'titlecase'})
export class TitleCasePipe implements PipeTransform{
  transform(value: string): string {
    var words = value.split(' ');
    var casedWords = words.map(word => word[0].toLocaleUpperCase() + word.slice(1))
    return casedWords.join(' ');
  }
}
