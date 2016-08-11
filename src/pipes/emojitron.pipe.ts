import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'emojitron'})
export class EmojitronPipe implements PipeTransform {
    transform(value:string, args:string[]):string { 
        var map = {
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
        }

        while(true) {
            var index = value.indexOf("*");
            if(index == -1) {
                break;
            }
            var sub = value.substr(index, 3);
            value = value.replace(sub, map[sub.substr(1,2)]);
        }
        return value;
    }
}