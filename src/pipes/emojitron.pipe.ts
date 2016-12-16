import { Pipe, PipeTransform } from '@angular/core';

const map = {
    'lv':'😍',
    'sm':'😃',
    'lf':'😂',
    'lk':'👍',
    'po':'💩',
    'mk':'🙈',
    'cy':'😥',
    'md':'😡',
    'fr':'🔥',
    'zz':'😴',
    'mn':'🌜',
    'sn':'🌞',
    'cl':'😎',
    'sp':'😱',
    'wk':'😜',
    'sd':'☹️',
    'al':'👽',
    'pr':'🙏',
    'sk':'😷',
    'ks':'💋',
    'ct':'🐱',
    'kl':'🐨',
    'pn':'🐼',
    'ap':'🍏',
    'cf':'☕️',
    'nd':'🤓'
};


@Pipe({name: 'emojitron'})
export class EmojitronPipe implements PipeTransform {
    transform(value:string, args:string[]):string {
        return value.replace(/\*([a-z]{2})/g, (match) => map[match.substr(1, 2)] || match);
    }
}