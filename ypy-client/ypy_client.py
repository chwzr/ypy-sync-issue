import asyncio
import y_py as Y
from websockets.client import connect
from ypy_websocket import WebsocketProvider


async def client():
    ydoc = Y.YDoc()
    async with connect("ws://localhost:1234/card_cd846c85-057d-413b-989a-1085d54c37f2.ipynb") as websocket:  # type: ignore
        WebsocketProvider(ydoc, websocket)
        await asyncio.sleep(1)
        cells = ydoc.get_array("cells")
        print(f"{cells = }")


asyncio.run(client())