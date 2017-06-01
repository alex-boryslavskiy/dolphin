let items = [];

class AGallery {
    //protected $dom : JQuery;
    //protected $items : JQuery;
    
    constructor() {
        qwe('constr');
        //this.$dom = $('#wrapper_gallery').find('.item');
        //this.$items = this.$dom.find('.item');
    }
    
    public init() : void {
        qwe('init');
        let row = 0,
            column = 0;
        
        $('#wrapper_gallery').find('.item').each((elemIndex,elem) => {
            
            if (column === 5) {
                column = 0;
                row++;
            }
            
            items[row] = items[row] || {};
            items[row][column] = items[row][column] || {};
            items[row][column] = new imgItem({
                $dom:$(elem),
                column:column,
                row:row,
                gIndex:elemIndex
            });
            column++;
        });
        
        qwe(items);
    }
}

class imgItem {
    public $dom;
    public top;
    public left;
    protected gIndex;
    
    constructor(p : {$dom : JQuery;column : number;row : number,gIndex : number}) {
        this.$dom = p.$dom;
        this.gIndex = p.gIndex;
        
        setTimeout(()=>{
            this.init(p);
        },500);
        
        
    }
    protected init(p) : void {
        qwe(p);
        if (p.column === 0 && p.row === 0) {
            this.left = 0;
            this.top = 0;
        } else {
            if (p.column !== 0) {
                this.top = (items[p.row][p.column - 1]).top;
                qwe($(this.$dom).width());
                this.left  = $(this.$dom).width() + (items[p.row][p.column - 1]).left;
            }
            if (p.column === 0 && p.row !== 0) {
                let prevItem:imgItem = items[p.row - 1][0],
                    prevTop = Number(prevItem.$dom.position().top),
                    prevHeight = Number(prevItem.$dom.height)
                ;
                this.top = prevTop + prevHeight;
                this.left = 0;
            }
        }
    
        this.$dom.css({
            top:this.top + 'px',
            left:this.left + 'px'
        });
        
    }
}
function qwe(a){
    console.log(a)
}
let a = new AGallery();a.init();