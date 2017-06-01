var items = [];
var AGallery = (function () {
    function AGallery() {
        qwe('constr');
    }
    AGallery.prototype.init = function () {
        qwe('init');
        var row = 0, column = 0;
        $('#wrapper_gallery').find('.item').each(function (elemIndex, elem) {
            if (column === 5) {
                column = 0;
                row++;
            }
            items[row] = items[row] || {};
            items[row][column] = items[row][column] || {};
            items[row][column] = new imgItem({
                $dom: $(elem),
                column: column,
                row: row,
                gIndex: elemIndex
            });
            column++;
        });
        qwe(items);
    };
    return AGallery;
}());
var imgItem = (function () {
    function imgItem(p) {
        var _this = this;
        this.$dom = p.$dom;
        this.gIndex = p.gIndex;
        setTimeout(function () {
            _this.init(p);
        }, 500);
    }
    imgItem.prototype.init = function (p) {
        qwe(p);
        if (p.column === 0 && p.row === 0) {
            this.left = 0;
            this.top = 0;
        }
        else {
            if (p.column !== 0) {
                this.top = (items[p.row][p.column - 1]).top;
                qwe($(this.$dom).width());
                this.left = $(this.$dom).width() + (items[p.row][p.column - 1]).left;
            }
            if (p.column === 0 && p.row !== 0) {
                var prevTop = (items[p.row - 1][p.column]).top,
                    prevHeight = (items[p.row - 1][p.column]).$dom.height();
                this.top = prevHeight + prevTop;
                this.left = 0;
            }
            else {
                if (p.column !== 0 && p.row !== 0) {
                    var prevTop = (items[p.row - 1][p.column]).top,
                        prevHeight = (items[p.row - 1][p.column]).$dom.height();
                    this.top = prevHeight + prevTop;
                    this.left = $(this.$dom).width() + (items[p.row][p.column - 1]).left;
                }
            }
        }
        this.$dom.css({
            top: this.top + 'px',
            left: this.left + 'px'
        });
    };
    return imgItem;
}());
function qwe(a) {
    console.log(a);
}
var a = new AGallery();
a.init();