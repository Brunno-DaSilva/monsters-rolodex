import React, { useState, useEffect } from "react";
import { Monster } from "../../App.jsx";
import Card from "../Card/Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./card-list.css";

type CarListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CarListProps) => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="droppableArea">
          {(provided) => {
            return (
              <div
                className="card-list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {monsters.map((monster, index) => {
                  return (
                    <Draggable
                      key={monster.id}
                      draggableId={monster.name}
                      index={index}
                    >
                      {(provided) => {
                        return (
                          <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <Card key={monster.id} monster={monster} />
                          </div>
                        );
                      }}
                    </Draggable>
                  );
                })}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default CardList;
