/**
 * Created by prvr on 4/6/2017.
 */

(function(){
    'use strict';


    var app = angular.module('uiComponentDesignApp', ['ngAnimate','ngMaterial','ngMessages','md.data.table'])
        .config(function ($mdThemingProvider) {

            $mdThemingProvider.definePalette('default', {
                '50': '#b6cef6',
                '100': '#72a0ee',
                '200': '#407ee7',
                '300': '#1959c7',
                '400': '#154dac',
                '500': '#124191',
                '600': '#0f3576',
                '700': '#0b295b',
                '800': '#081c3f',
                '900': '#041024',
                'A100': '#b6cef6',
                'A200': '#72a0ee',
                'A400': '#154dac',
                'A700': '#0b295b',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': '50 100 A100 A200'
            });

            $mdThemingProvider.definePalette('accent', {
                '50': '#ffffff',
                '100': '#bdf1ff',
                '200': '#85e5ff',
                '300': '#3dd6ff',
                '400': '#1fcfff',
                '500': '#00c9ff',
                '600': '#00b1e0',
                '700': '#0099c2',
                '800': '#0081a3',
                '900': '#006985',
                'A100': '#ffffff',
                'A200': '#bdf1ff',
                'A400': '#1fcfff',
                'A700': '#0099c2',
                'contrastDefaultColor': 'dark',
                'contrastDarkColors': '50 100 200 300 400 500 600 A100 A200 A400'
            });

        $mdThemingProvider.theme('default')
            .primaryPalette('default');

        //$mdThemingProvider.theme('default')
        //    .accentPalette('accent');

    })
        .controller('uiComponentDesignAppCtrl', function($scope, $mdDialog){

            $scope.componentsList =[
                {
                    "label":"Data Table",
                    "url":"deisgn_page.html",
                },
                {
                    "label":"Header",
                    "url":"#",
                },
                {
                    "label":"Footer",
                    "url":"#",
                },
                {
                    "label":"Side Nav",
                    "url":"#",
                },
                {
                    "label":"Dialogs",
                    "url":"#",
                },
                {
                    "label":"Date Pickers",
                    "url":"#",
                },
                {
                    "label":"Icons",
                    "url":"#",
                },
                {
                    "label":"List",
                    "url":"#",
                },
                {
                    "label":"Expansion Panels",
                    "url":"#",
                },
                {
                    "label":"Buttons",
                    "url":"#",
                },
                {
                    "label":"Cards",
                    "url":"#",
                },
                {
                    "label":"Chips",
                    "url":"#",
                },
                {
                    "label":"Colors",
                    "url":"#",
                },
                {
                    "label":"Toast",
                    "url":"#",
                },
                {
                    "label":"Tooltip",
                    "url":"#",
                },
                {
                    "label":"Rich Tooltip",
                    "url":"#",
                },
                {
                    "label":"Theming",
                    "url":"#",
                }
            ]

            $scope.tableFooter = 'isPagination';



            function componentCustomizer(){
                var previewComponentHTML = document.getElementById('htmlPreview');
                var convertedHtml = previewComponentHTML.innerHTML;
                $scope.htmlConverted =  convertedHtml.replace(/<!--[\s\S]*?-->/g,"");
            }

            $scope.generateCode = function(){
                componentCustomizer();
            };



            //File Path
            var cssFilepath = 'components/dataTable/data-table.style.css';
            var jsFilePath = 'components/dataTable/data-table.js';


            //Load Component CSS file in page
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = cssFilepath;
            link.media = 'all';
            head.appendChild(link);

            //Load Script File
            var body  = document.getElementsByTagName('body')[0];
            var script = document.createElement('script');
            script.src = jsFilePath;
            //body.appendChild(script);

            //Read CSS File.
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                function readTextFile(file)
                {

                    var rawFile = new XMLHttpRequest();
                    rawFile.open("GET", file, false);
                    rawFile.onreadystatechange = function ()
                    {
                        var fileContent;
                        if(rawFile.readyState === 4)
                        {
                            if(rawFile.status === 200 || rawFile.status == 0)
                            {
                                var allText = rawFile.responseText;
                                return fileContent = allText;
                            }
                        }

                    }
                    rawFile.send(null);
                    return rawFile.onreadystatechange();
                }
                $scope.cssFile = readTextFile(cssFilepath);
                $scope.jsFile = readTextFile(jsFilePath);

            } else {
                alert('The File APIs are not fully supported by your browser.');
            }

            //Data table
            $scope.selected = [];
            $scope.limitOptions = [5, 10, 15];

            $scope.options = {
                rowSelection: false,
                multiSelect: true,
                autoSelect: true,
                decapitate: false,
                boundaryLinks: false,
                limitSelect: true,
                pageSelect: true
            };

            $scope.query = {
                order: 'name',
                limit: 5,
                page: 1
            };


        //    Configurations
            $scope.config = {
                isTableTitle: true,
                isActionItems: true,
                isVerticalMore:true,
                isFilter:true,
                isRefresh:true,
                isAdd:true,
                isRowActionItems:false,
                isVerticalMore:false,
                isFilter:true,
                isFavorite:false

            }
            //    Icon Library Model
            $scope.iconLibrary = function(ev){
                $mdDialog.show({
                    controller:'iconLibraryCtrl',
                    templateUrl:'icon-library.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    scope: $scope,
                    preserveScope: true
                })
            };

            $scope.selectedIconVal;

            function processSelectedIcon(){

            }


        })
        .controller('iconLibraryCtrl', function ($scope, $mdDialog) {
            $scope.icons = [
                {
                    "label":"Refresh",
                    "iconValue":"refresh",
                    "selected":false
                },
                {
                    "label":"Edit",
                    "iconValue":"edit",
                    "selected":false
                },
                {
                    "label":"Account Circle",
                    "iconValue":"account_circle",
                    "selected":false
                },
                {
                    "label":"Build",
                    "iconValue":"build",
                    "selected":false
                },
                {
                    "label":"Cached",
                    "iconValue":"cached",
                    "selected":false
                },
                {
                    "label":"Description",
                    "iconValue":"description",
                    "selected":false
                },
                {
                    "label":"Done",
                    "iconValue":"done",
                    "selected":false
                },
                {
                    "label":"Done All",
                    "iconValue":"done_all",
                    "selected":false
                },
                {
                    "label":"Face",
                    "iconValue":"face",
                    "selected":false
                },
                {
                    "label":"Favorite",
                    "iconValue":"favorite",
                    "selected":false
                },
                {
                    "label":"favorite Border",
                    "iconValue":"favorite_border",
                    "selected":false
                },
                {
                    "label":"grade",
                    "iconValue":"grade",
                    "selected":false
                },
                {
                    "label":"Help",
                    "iconValue":"help",
                    "selected":false
                },
                {
                    "label":"History",
                    "iconValue":"history",
                    "selected":false
                },
                {
                    "label":"Launch",
                    "iconValue":"launch",
                    "selected":false
                },
                {
                    "label":"Error",
                    "iconValue":"error",
                    "selected":false
                },
                {
                    "label":"Warning",
                    "iconValue":"warning",
                    "selected":false
                },
                {
                    "label":"Add",
                    "iconValue":"add",
                    "selected":false
                },
                {
                    "label":"Add Box",
                    "iconValue":"add_box",
                    "selected":false
                },
                {
                    "label":"Clear",
                    "iconValue":"clear",
                    "selected":false
                },
                {
                    "label":"Save",
                    "iconValue":"save",
                    "selected":false
                },
                {
                    "label":"Cloud",
                    "iconValue":"cloud",
                    "selected":false
                },
                {
                    "label":"Folder",
                    "iconValue":"folder",
                    "selected":false
                }
            ];
            $scope.iconset = {
                icon:'refresh'
            }
            $scope.selectedIcon = function(iconset){
                $scope.selectedIconVal = iconset;
                $mdDialog.cancel();
            }

            $scope.closeDialog = function(){
                $mdDialog.cancel();
            };
        })


}());