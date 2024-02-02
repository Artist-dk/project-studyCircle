import React from 'react'
import '../../style/typing.css';

export default function Practice() {
  return (
    <>
    <div className="center">
        <div className="display01" id="display01">
            <textarea className="text01" id="text01"></textarea>
            <div className="highlighter01" id="highlighter01"></div>
        </div>
    </div>
    <div className="center">
        <div className="keyboard01">
            <div className="line01">
                <button id="charCode96" className="keya01 key01 tildekey01"><span className="top01">~</span><span className="bottom01">`</span></button>
                <button id="charCode49" className="keya01 key01"><span className="top01">!</span><span className="bottom01">1</span></button>
                <button id="charCode50" className="keyb01 key01"><span className="top01">@</span><span className="bottom01">2</span></button>
                <button id="charCode51" className="keyc01 key01"><span className="top01">#</span><span className="bottom01">3</span></button>
                <button id="charCode52" className="keyd01 key01"><span className="top01">$</span><span className="bottom01">4</span></button>
                <button id="charCode53" className="keyd01 key01"><span className="top01">%</span><span className="bottom01">5</span></button>
                <button id="charCode54" className="keyd01 key01"><span className="top01">^</span><span className="bottom01">6</span></button>
                <button id="charCode55" className="keyd01 key01"><span className="top01">&</span><span className="bottom01">7</span></button>
                <button id="charCode56" className="keyc01 key01"><span className="top01">*</span><span className="bottom01">8</span></button>
                <button id="charCode57" className="keyb01 key01"><span className="top01">(</span><span className="bottom01">9</span></button>
                <button id="charCode48" className="keya01 key01"><span className="top01">)</span><span className="bottom01">0</span></button>
                <button id="charCode45" className="keya01 key01"><span className="top01">_</span><span className="bottom01">-</span></button>
                <button id="charCode61" className="keya01 key01"><span className="top01">+</span><span className="bottom01">=</span></button>
                <button id="charCode" className="keya01 key01 backspacekey01"><span>backspace</span></button>
            </div>
            <div className="line01">
                <button id="charCode" className="keya01 key01 tabkey01">tab</button>
                <button id="charCode81" className="keya01 key01">Q</button>
                <button id="charCode87" className="keyb01 key01">W</button>
                <button id="charCode69" className="keyc01 key01">E</button>
                <button id="charCode82" className="keyd01 key01">R</button>
                <button id="charCode84" className="keyd01 key01">T</button>
                <button id="charCode89" className="keyd01 key01">Y</button>
                <button id="charCode85" className="keyd01 key01">U</button>
                <button id="charCode73" className="keyc01 key01">I</button>
                <button id="charCode79" className="keyb01 key01">O</button>
                <button id="charCode80" className="keya01 key01">P</button>
                <button id="charCode91" className="keya01 key01"><span className="top01">
                  {/* { */}
                
                </span><span className="bottom01">[</span></button>
                <button id="charCode93" className="keya01 key01"><span className="top01">
                  {/* } */}
                  </span><span className="bottom01">]</span></button>
                <button id="charCode92" className="keya01 key01 backslashkey01"><span className="top01">|</span><span className="bottom01">\</span></button>
            </div>
            <div className="line01">
                <button id="charCode" className="keya01 key01 capslockkey01">caps lock</button>
                <button id="charCode65" className="keya01 key01">A</button>
                <button id="charCode83" className="keyb01 key01">S</button>
                <button id="charCode68" className="keyc01 key01">D</button>
                <button id="charCode70" className="keyd01 key01">F</button>
                <button id="charCode71" className="keyd01 key01">G</button>
                <button id="charCode72" className="keyd01 key01">H</button>
                <button id="charCode74" className="keyd01 key01">J</button>
                <button id="charCode75" className="keyc01 key01">K</button>
                <button id="charCode76" className="keyb01 key01">L</button>
                <button id="charCode59" className="keya01 key01"><span className="top01">:</span><span className="bottom01">;</span></button>
                <button id="charCode39" className="keya01 key01"><span className="top01">"</span><span className="bottom01">'</span></button>
                <button id="charCode" className="keya01 key01 enterkey01">enter</button>
            </div>
            <div className="line01">
                <button id="lshift" className="keya01 key01 lshiftkey01">shift</button>
                <button id="charCode90" className="keya01 key01">Z</button>
                <button id="charCode88" className="keyb01 key01">X</button>
                <button id="charCode67" className="keyc01 key01">C</button>
                <button id="charCode86" className="keyd01 key01">V</button>
                <button id="charCode66" className="keyd01 key01">B</button>
                <button id="charCode78" className="keyd01 key01">N</button>
                <button id="charCode77" className="keyd01 key01">M</button>
                <button id="charCode44" className="keyc01 key01"><span className="top01">
                  {/* < */}
                </span><span className="bottom01">,</span></button>
                <button id="charCode46" className="keyb01 key01"><span className="top01">
                  {/* > */}
                </span><span className="bottom01">.</span></button>
                <button id="charCode47" className="keya01 key01"><span className="top01">?</span><span className="bottom01">/</span></button>
                <button id="rshift" className="keya01 key01 rshiftkey01">shift</button>
            </div>
            <div className="line01">
                <button className="key01 llkey01 ctrlkey01">ctrl</button>
                <button className="key01 llkey01">w</button>
                <button className="key01 llkey01">alt</button>
                <button className="key01 llkey01 spacekey01" id="spacekey">space</button>
                <button className="key01 llkey01">alt</button>
                <button className="key01 llkey01">p</button>
                <button className="key01 llkey01">p</button>
                <button className="key01 llkey01">ctrl</button>
            </div>
        </div>
    </div>
    <div className="center">
        <div>
            <canvas className="handContainter01" id="handContainer01" height="170" width="300"></canvas>
        </div>
    </div>
    </>
  )
}















